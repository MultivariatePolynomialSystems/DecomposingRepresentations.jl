export IsotypicComponent,
    mul


struct IsotypicComponent{
    A<:AbstractGroupAction{Lie}, W<:Weight, Ir<:IrreducibleRepresentation{A}
} <: AbstractGroupRepresentation{Lie, DirectSum}
    action::A
    highest_weight::W
    irreds::Vector{Ir}
end

action(ρ::IsotypicComponent) = ρ.action
highest_weight(ρ::IsotypicComponent) = ρ.highest_weight
irreducibles(ρ::IsotypicComponent) = ρ.irreds
mul(ρ::IsotypicComponent) = length(ρ.irreds)
space(ρ::IsotypicComponent) = DirectSum([space(ρᵢ) for ρᵢ in irreducibles(ρ)])
dim(ρ::IsotypicComponent) = sum([dim(ρᵢ) for ρᵢ in irreducibles(ρ)])
hw_vectors(ρ::IsotypicComponent) = [hw_vector(ρᵢ) for ρᵢ in irreducibles(ρ)]
isotypic_components(ρ::IsotypicComponent) = [ρ]

function Base.show(io::IO, ::MIME"text/plain", ρ::IsotypicComponent)
    println(io, "IsotypicComponent of dimension $(dim(ρ)), multiplicity $(mul(ρ))")
    println(io, " Lie group: ", name(group(ρ)))
    println(io, " highest weight: ", highest_weight(ρ))
    println(io, " dimension of irreducible subrepresentation: ", weyl_dim(highest_weight(ρ), group(ρ)))
    print(io, " multiplicity of irreducible subrepresentation: ", mul(ρ))
end

function Base.show(io::IO, ρ::IsotypicComponent)
    print(io, "IsotypicComponent with (dim, mul) = ($(dim(ρ)), $(mul(ρ)))")
end
