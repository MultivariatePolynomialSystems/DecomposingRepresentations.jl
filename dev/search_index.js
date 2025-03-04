var documenterSearchIndex = {"docs":
[{"location":"groups/groups/#Groups","page":"Groups","title":"Groups","text":"","category":"section"},{"location":"groups/groups/","page":"Groups","title":"Groups","text":"AbstractGroup","category":"page"},{"location":"groups/groups/#DecomposingRepresentations.AbstractGroup","page":"Groups","title":"DecomposingRepresentations.AbstractGroup","text":"AbstractGroup{T<:GroupType, F}\n\nAn abstract type representing a mathematical group. The type T represents a GroupType, while F represents the number field (or number type) over which the group is defined.\n\n\n\n\n\n","category":"type"},{"location":"groups/groups/#Group-types","page":"Groups","title":"Group types","text":"","category":"section"},{"location":"groups/groups/","page":"Groups","title":"Groups","text":"GroupType\nFinite\nLie\nMixed","category":"page"},{"location":"groups/groups/#DecomposingRepresentations.GroupType","page":"Groups","title":"DecomposingRepresentations.GroupType","text":"GroupType\n\nAbstract type representing a group type in the context of decomposing representations. This serves as a base type for all specific group types that will be defined.\n\n\n\n\n\n","category":"type"},{"location":"groups/groups/#DecomposingRepresentations.Finite","page":"Groups","title":"DecomposingRepresentations.Finite","text":"Finite <: GroupType\n\nRepresents a finite group type. This type is used to categorize groups that have a finite number of elements.\n\n\n\n\n\n","category":"type"},{"location":"groups/groups/#DecomposingRepresentations.Lie","page":"Groups","title":"DecomposingRepresentations.Lie","text":"Lie <: GroupType\n\nRepresents a Lie group type.\n\n\n\n\n\n","category":"type"},{"location":"groups/groups/#DecomposingRepresentations.Mixed","page":"Groups","title":"DecomposingRepresentations.Mixed","text":"Mixed <: GroupType\n\nRepresents a mixed group type. This type is used in direct products of finite groups with Lie groups.\n\n\n\n\n\n","category":"type"},{"location":"groups/groups/#Finite-groups","page":"Groups","title":"Finite groups","text":"","category":"section"},{"location":"groups/groups/#Lie-groups","page":"Groups","title":"Lie groups","text":"","category":"section"},{"location":"groups/groups/","page":"Groups","title":"Groups","text":"algebra(::AbstractGroup{Lie})","category":"page"},{"location":"groups/groups/#DecomposingRepresentations.algebra-Tuple{AbstractGroup{Lie}}","page":"Groups","title":"DecomposingRepresentations.algebra","text":"algebra(::AbstractGroup{Lie}) -> AbstractLieAlgebra\n\nReturns the Lie algebra of a given Lie group.\n\n\n\n\n\n","category":"method"},{"location":"groups/groups/#Lie-algebras","page":"Groups","title":"Lie algebras","text":"","category":"section"},{"location":"groups/groups/","page":"Groups","title":"Groups","text":"AbstractLieAlgebra\nname(::AbstractLieAlgebra)\nbasis(::AbstractLieAlgebra)\nchevalley_basis(::AbstractLieAlgebra)\ndim(::AbstractLieAlgebra)\nrank(::AbstractLieAlgebra)","category":"page"},{"location":"groups/groups/#DecomposingRepresentations.AbstractLieAlgebra","page":"Groups","title":"DecomposingRepresentations.AbstractLieAlgebra","text":"AbstractLieAlgebra{F}\n\nAn abstract type representing a Lie algebra. The type F represents the number field (or number type) over which the Lie algebra is defined.\n\n\n\n\n\n","category":"type"},{"location":"groups/groups/#DecomposingRepresentations.name-Tuple{AbstractLieAlgebra}","page":"Groups","title":"DecomposingRepresentations.name","text":"name(::AbstractLieAlgebra) -> String\n\nReturns the name of the given Lie algebra.\n\n\n\n\n\n","category":"method"},{"location":"groups/groups/#DecomposingRepresentations.basis-Tuple{AbstractLieAlgebra}","page":"Groups","title":"DecomposingRepresentations.basis","text":"basis(::AbstractLieAlgebra)\n\nReturns the basis of the given Lie algebra.\n\n\n\n\n\n","category":"method"},{"location":"groups/groups/#DecomposingRepresentations.chevalley_basis-Tuple{AbstractLieAlgebra}","page":"Groups","title":"DecomposingRepresentations.chevalley_basis","text":"chevalley_basis(::AbstractLieAlgebra)\n\nReturns the Chevalley basis of the given Lie algebra.\n\n\n\n\n\n","category":"method"},{"location":"groups/groups/#DecomposingRepresentations.dim-Tuple{AbstractLieAlgebra}","page":"Groups","title":"DecomposingRepresentations.dim","text":"dim(::AbstractLieAlgebra) -> Int\n\nReturns the dimension of the given Lie algebra.\n\n\n\n\n\n","category":"method"},{"location":"groups/groups/#DecomposingRepresentations.rank-Tuple{AbstractLieAlgebra}","page":"Groups","title":"DecomposingRepresentations.rank","text":"rank(::AbstractLieAlgebra) -> Int\n\nReturns the rank (i.e. the dimension of the Cartan subalgebra) of the given Lie algebra.\n\n\n\n\n\n","category":"method"},{"location":"groups/groups/#Direct-product-of-groups","page":"Groups","title":"Direct product of groups","text":"","category":"section"},{"location":"groups/groups/","page":"Groups","title":"Groups","text":"AbstractDirectProductGroup","category":"page"},{"location":"groups/groups/#DecomposingRepresentations.AbstractDirectProductGroup","page":"Groups","title":"DecomposingRepresentations.AbstractDirectProductGroup","text":"AbstractDirectProductGroup{T<:GroupType, F} <: AbstractGroup{T, F}\n\nAn abstract type representing a direct product group.\n\n\n\n\n\n","category":"type"},{"location":"groups/elements/#Group-and-Lie-algebra-elements","page":"Group elements","title":"Group and Lie algebra elements","text":"","category":"section"},{"location":"groups/elements/","page":"Group elements","title":"Group elements","text":"AbstractGroupElem\nAbstractLieAlgebraElem","category":"page"},{"location":"groups/elements/#DecomposingRepresentations.AbstractGroupElem","page":"Group elements","title":"DecomposingRepresentations.AbstractGroupElem","text":"AbstractGroupElem\n\nAn abstract type representing a group element.\n\n\n\n\n\n","category":"type"},{"location":"groups/elements/#DecomposingRepresentations.AbstractLieAlgebraElem","page":"Group elements","title":"DecomposingRepresentations.AbstractLieAlgebraElem","text":"AbstractLieAlgebraElem\n\nAn abstract type representing an element of a Lie algebra.\n\n\n\n\n\n","category":"type"},{"location":"groups/elements/#GroupElem","page":"Group elements","title":"GroupElem","text":"","category":"section"},{"location":"groups/elements/","page":"Group elements","title":"Group elements","text":"group(::AbstractGroupElem)","category":"page"},{"location":"groups/elements/#DecomposingRepresentations.group-Tuple{AbstractGroupElem}","page":"Group elements","title":"DecomposingRepresentations.group","text":"group(::AbstractGroupElem) -> AbstractGroup\n\nReturns the group to which the given group element belongs.\n\n\n\n\n\n","category":"method"},{"location":"groups/elements/#LieAlgebraElem","page":"Group elements","title":"LieAlgebraElem","text":"","category":"section"},{"location":"groups/elements/","page":"Group elements","title":"Group elements","text":"algebra(::AbstractLieAlgebraElem)","category":"page"},{"location":"groups/elements/#DecomposingRepresentations.algebra-Tuple{AbstractLieAlgebraElem}","page":"Group elements","title":"DecomposingRepresentations.algebra","text":"algebra(::AbstractLieAlgebraElem) -> AbstractLieAlgebra\n\nReturns the Lie algebra to which the given Lie algebra element belongs.\n\n\n\n\n\n","category":"method"},{"location":"representations/spaces/#Vector-spaces","page":"Vector spaces","title":"Vector spaces","text":"","category":"section"},{"location":"representations/spaces/","page":"Vector spaces","title":"Vector spaces","text":"AbstractVectorSpace\nbasis(::AbstractVectorSpace)\ndim(::AbstractVectorSpace)","category":"page"},{"location":"representations/spaces/#DecomposingRepresentations.AbstractVectorSpace","page":"Vector spaces","title":"DecomposingRepresentations.AbstractVectorSpace","text":"AbstractVectorSpace{F}\n\nAn abstract type representing a vector space. The type F represents the number field (or number type) over which the vector space is defined.\n\n\n\n\n\n","category":"type"},{"location":"representations/spaces/#DecomposingRepresentations.basis-Tuple{AbstractVectorSpace}","page":"Vector spaces","title":"DecomposingRepresentations.basis","text":"basis(::AbstractVectorSpace)\n\nReturns a basis of the given vector space.\n\n\n\n\n\n","category":"method"},{"location":"representations/spaces/#DecomposingRepresentations.dim-Tuple{AbstractVectorSpace}","page":"Vector spaces","title":"DecomposingRepresentations.dim","text":"dim(::AbstractVectorSpace) -> Int\n\nReturns the dimension of the given vector space.\n\n\n\n\n\n","category":"method"},{"location":"representations/spaces/#VectorSpace","page":"Vector spaces","title":"VectorSpace","text":"","category":"section"},{"location":"representations/spaces/#Direct-sum","page":"Vector spaces","title":"Direct sum","text":"","category":"section"},{"location":"representations/spaces/","page":"Vector spaces","title":"Vector spaces","text":"AbstractDirectSum\nsummands(::AbstractDirectSum)\nnsummands(::AbstractDirectSum)","category":"page"},{"location":"representations/spaces/#DecomposingRepresentations.AbstractDirectSum","page":"Vector spaces","title":"DecomposingRepresentations.AbstractDirectSum","text":"AbstractDirectSum{F} <: AbstractVectorSpace{F}\n\nAn abstract type representing a direct sum of vector spaces over the field (or number type) F.\n\n\n\n\n\n","category":"type"},{"location":"representations/spaces/#DecomposingRepresentations.summands-Tuple{AbstractDirectSum}","page":"Vector spaces","title":"DecomposingRepresentations.summands","text":"summands(::AbstractDirectSum)\n\nReturns the summands of the given direct sum of vector spaces.\n\n\n\n\n\n","category":"method"},{"location":"representations/spaces/#DecomposingRepresentations.nsummands-Tuple{AbstractDirectSum}","page":"Vector spaces","title":"DecomposingRepresentations.nsummands","text":"nsummands(::AbstractDirectSum) -> Int\n\nReturns the number of summands in the given direct sum of vector spaces.\n\n\n\n\n\n","category":"method"},{"location":"representations/spaces/#Symmetric-power","page":"Vector spaces","title":"Symmetric power","text":"","category":"section"},{"location":"representations/spaces/","page":"Vector spaces","title":"Vector spaces","text":"AbstractSymmetricPower\nbase_space\npower","category":"page"},{"location":"representations/spaces/#DecomposingRepresentations.AbstractSymmetricPower","page":"Vector spaces","title":"DecomposingRepresentations.AbstractSymmetricPower","text":"AbstractSymmetricPower{F} <: AbstractVectorSpace{F}\n\nAn abstract type representing a symmetric power of a vector space over the field (or number type) F.\n\n\n\n\n\n","category":"type"},{"location":"representations/spaces/#DecomposingRepresentations.base_space","page":"Vector spaces","title":"DecomposingRepresentations.base_space","text":"base_space(::AbstractSymmetricPower) -> AbstractVectorSpace\n\nReturns the base vector space of the given symmetric power. I.e. for mathrmSym^n(V), this function returns V.\n\n\n\n\n\n","category":"function"},{"location":"representations/spaces/#DecomposingRepresentations.power","page":"Vector spaces","title":"DecomposingRepresentations.power","text":"power(::AbstractSymmetricPower) -> Int\n\nReturns the power of the given symmetric power.\n\n\n\n\n\n","category":"function"},{"location":"representations/spaces/#Tensor-product","page":"Vector spaces","title":"Tensor product","text":"","category":"section"},{"location":"representations/spaces/","page":"Vector spaces","title":"Vector spaces","text":"AbstractTensorProduct\nspaces","category":"page"},{"location":"representations/spaces/#DecomposingRepresentations.AbstractTensorProduct","page":"Vector spaces","title":"DecomposingRepresentations.AbstractTensorProduct","text":"AbstractTensorProduct{F} <: AbstractVectorSpace{F}\n\nAn abstract type representing a tensor product of vector spaces over the field F.\n\n\n\n\n\n","category":"type"},{"location":"representations/spaces/#DecomposingRepresentations.spaces","page":"Vector spaces","title":"DecomposingRepresentations.spaces","text":"spaces(::AbstractTensorProduct) -> Tuple{AbstractVectorSpace}\n\nReturns the tuple of vector spaces that form the given tensor product.\n\n\n\n\n\n","category":"function"},{"location":"representations/spaces/#HighestWeightModule","page":"Vector spaces","title":"HighestWeightModule","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"CurrentModule = DecomposingRepresentations","category":"page"},{"location":"#Introduction","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"DecomposingRepresentations.jl is a Julia package that provides an API for decomposing vector space representations of reductive groups together with a concrete implementation of group actions on multivariate polynomials using DynamicPolynomials.jl.","category":"page"},{"location":"#Quick-start","page":"Introduction","title":"Quick start","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"using DecomposingRepresentations\n@polyvar x[1:3] y[1:3]\nSO3 = LieGroup(\"SO\", 3)\na = MatrixGroupAction(SO3, [x, y])\nV = SymmetricPowersSpace(vcat(x, y), 0:2)\nρ = GroupRepresentation(a, V)\nirrs = irreducibles(ρ)\nsum([dim(irr) for irr in irrs])\niso = isotypic_components(ρ)\niso[2]\nbasis(space(iso[2]))","category":"page"},{"location":"representations/actions/#Group-actions","page":"Actions","title":"Group actions","text":"","category":"section"},{"location":"representations/actions/","page":"Actions","title":"Actions","text":"AbstractGroupAction\ngroup(::AbstractGroupAction)\nalgebra(::AbstractGroupAction{Lie})","category":"page"},{"location":"representations/actions/#DecomposingRepresentations.AbstractGroupAction","page":"Actions","title":"DecomposingRepresentations.AbstractGroupAction","text":"AbstractGroupAction{T<:GroupType, F}\n\nAn abstract type representing a group action. It is used to define how a group acts on a given vector space.\n\n\n\n\n\n","category":"type"},{"location":"representations/actions/#DecomposingRepresentations.group-Tuple{AbstractGroupAction}","page":"Actions","title":"DecomposingRepresentations.group","text":"group(::AbstractGroupAction) -> AbstractGroup\n\nReturns the group associated with a given AbstractGroupAction.\n\n\n\n\n\n","category":"method"},{"location":"representations/actions/#DecomposingRepresentations.algebra-Tuple{AbstractGroupAction{Lie}}","page":"Actions","title":"DecomposingRepresentations.algebra","text":"algebra(a::AbstractGroupAction{Lie}) -> AbstractLieAlgebra\n\nReturns the associated Lie algebra of the Lie group of the action.\n\n\n\n\n\n","category":"method"},{"location":"representations/actions/#MatrixGroupAction","page":"Actions","title":"MatrixGroupAction","text":"","category":"section"},{"location":"representations/actions/#ScalingLieGroupAction","page":"Actions","title":"ScalingLieGroupAction","text":"","category":"section"},{"location":"representations/reprs/#Group-representations","page":"Representations","title":"Group representations","text":"","category":"section"},{"location":"representations/reprs/","page":"Representations","title":"Representations","text":"AbstractGroupRepresentation","category":"page"},{"location":"representations/reprs/#DecomposingRepresentations.AbstractGroupRepresentation","page":"Representations","title":"DecomposingRepresentations.AbstractGroupRepresentation","text":"AbstractGroupRepresentation{T<:GroupType, S<:AbstractVectorSpace}\n\nAn abstract type representing a group representation. The type T represents a GroupType, and S represents an AbstractVectorSpace.\n\n\n\n\n\n","category":"type"},{"location":"representations/reprs/#GroupRepresentation","page":"Representations","title":"GroupRepresentation","text":"","category":"section"},{"location":"representations/reprs/#IrreducibleRepresentation","page":"Representations","title":"IrreducibleRepresentation","text":"","category":"section"},{"location":"representations/reprs/#IsotypicComponent","page":"Representations","title":"IsotypicComponent","text":"","category":"section"},{"location":"representations/reprs/#Methods","page":"Representations","title":"Methods","text":"","category":"section"},{"location":"representations/reprs/","page":"Representations","title":"Representations","text":"action(::AbstractGroupRepresentation)\ngroup(ρ::AbstractGroupRepresentation)\nspace(::AbstractGroupRepresentation)\ndim(ρ::AbstractGroupRepresentation)\nirreducibles(::AbstractGroupRepresentation)\nisotypic_components(::AbstractGroupRepresentation)","category":"page"},{"location":"representations/reprs/#DecomposingRepresentations.action-Tuple{AbstractGroupRepresentation}","page":"Representations","title":"DecomposingRepresentations.action","text":"action(::AbstractGroupRepresentation) -> AbstractGroupAction\n\nReturns the group action associated with the given group representation.\n\n\n\n\n\n","category":"method"},{"location":"representations/reprs/#DecomposingRepresentations.group-Tuple{AbstractGroupRepresentation}","page":"Representations","title":"DecomposingRepresentations.group","text":"group(ρ::AbstractGroupRepresentation) -> AbstractGroup\n\nReturns the group associated with the given group representation.\n\n\n\n\n\n","category":"method"},{"location":"representations/reprs/#DecomposingRepresentations.space-Tuple{AbstractGroupRepresentation}","page":"Representations","title":"DecomposingRepresentations.space","text":"space(::AbstractGroupRepresentation) -> AbstractVectorSpace\n\nReturns the vector space on which the given group representation acts.\n\n\n\n\n\n","category":"method"},{"location":"representations/reprs/#DecomposingRepresentations.dim-Tuple{AbstractGroupRepresentation}","page":"Representations","title":"DecomposingRepresentations.dim","text":"dim(ρ::AbstractGroupRepresentation) -> Int\n\nReturns the dimension of the vector space on which the given group representation acts.\n\n\n\n\n\n","category":"method"},{"location":"representations/reprs/#DecomposingRepresentations.irreducibles-Tuple{AbstractGroupRepresentation}","page":"Representations","title":"DecomposingRepresentations.irreducibles","text":"irreducibles(::AbstractGroupRepresentation) -> Any\n\nReturns the irreducible components of the given group representation.\n\n\n\n\n\n","category":"method"},{"location":"representations/reprs/#DecomposingRepresentations.isotypic_components-Tuple{AbstractGroupRepresentation}","page":"Representations","title":"DecomposingRepresentations.isotypic_components","text":"isotypic_components(::AbstractGroupRepresentation) -> Any\n\nReturns the isotypic components of the given group representation.\n\n\n\n\n\n","category":"method"}]
}
