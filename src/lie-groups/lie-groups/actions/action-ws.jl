export hw_spaces, weight_structure

function inv_weight_space(
    a::AbstractGroupAction{Lie, F},
    V::VariableSpace{F}
) where F
    inv_vars = setdiff(variables(V), variables(a)) # variables invariant under the action
    isempty(inv_vars) && return nothing
    return WeightSpace(zero_weight(group(a)), VariableSpace{F}(inv_vars))
end

function weight_structure(
    a::ScalingLieGroupAction{F},
    V::S
) where {F, S<:VariableSpace{F}}
    ws = WeightStructure{S, weight_type(algebra(a))}()
    var_dict = Dict(zip(variables(a), 1:length(variables(a))))
    for var in variables(a) ∩ variables(V)
        wv = WeightVector(weight(group(a), var_dict[var]), var)
        push!(ws, wv)
    end
    inv_ws = inv_weight_space(a, V)
    !isnothing(inv_ws) && push!(ws, inv_ws)
    return ws
end

# For the isotypic decomposition V = ⨁ₖ Vₖ returns the weight structure of h.w. spaces of Vⱼ
# If Vₖ = ⨁ⱼ Wⱼ is the irreducible decomposition, then h.w.s.(Vₖ) = ⨁ⱼ h.w.v.(Wⱼ)
hw_spaces(a::ScalingLieGroupAction, V::VariableSpace) = weight_structure(a, V)


function weight_structure(
    a::MatrixGroupAction{Lie, F},
    V::VariableSpace{F, Variable{T,S}};
    as_hw_spaces::Bool=false
) where {F, T, S}
    ws_V = WeightStructure{PolySpace{F, Polynomial{T,S,F}}, weight_type(algebra(a))}()
    ws_alg = as_hw_spaces ? hw_spaces(algebra(a)) : weight_structure(algebra(a))
    for w_space in ws_alg
        poly_wvs = [sum(av .* vector(wv)) for av in action_vectors(a) if av ⊆ variables(V) for wv in w_space]
        !isempty(poly_wvs) && push!(ws_V, WeightSpace(weight(w_space), PolySpace{F}(poly_wvs)))
    end
    inv_ws = inv_weight_space(a, V)
    !isnothing(inv_ws) && push!(ws_V, inv_ws)
    return ws_V
end

hw_spaces(a::MatrixGroupAction{Lie}, V::VariableSpace) = weight_structure(a, V, as_hw_spaces=true)

function Base.:∩(ws₁::WeightSpace, ws₂::WeightSpace)
    new_weight = vcat(weight(ws₁), weight(ws₂))
    int_space = ∩(space(ws₁), space(ws₂))
    isnothing(int_space) && return nothing
    return WeightSpace(new_weight, int_space)
end

function Base.:∩(ws1::WeightStructure, ws2::WeightStructure)
    isempty(ws1) && return ws2
    isempty(ws2) && return ws1
    new_spaces = [w_space₁ ∩ w_space₂ for w_space₁ in ws1 for w_space₂ in ws2]
    return WeightStructure([ws for ws in new_spaces if !isnothing(ws)])
end

hw_spaces(
    a::DirectProductGroupAction{Lie},
    V::VariableSpace
) = reduce(∩, [hw_spaces(action, V) for action in lie_actions(a)])

function weight_structure(
    a::DirectProductGroupAction{Lie, F},
    V::VariableSpace{F, Variable{T,S}};
) where {F, T, S}
    hw_struct = hw_spaces(a, V)
    ws = WeightStructure{PolySpace{F, Polynomial{T,S,F}}, weight_type(algebra(a))}()
    for hw_space in hw_struct
        for hwv in hw_space
            hwm = HighestWeightModule(a, hwv)
            [push!(ws, wv) for wv in basis(hwm; as_weight_vectors=true)]
        end
    end
    return ws
end
