import {
    createHeader,
    createIMG,
    createUpDownVote,
    createCommentForm,
    createCommentSection,
} from './scaffolding.js'

import {
    createImageFunctionality,
    createVoteFunctionality,
    createCommentFormFunctionality,
    createCommentSectionFunctionality,
    newCatButtonFunctionality
} from './functionality.js'

export const initializePage = () => {
    createHeader()
    createIMG()
    createUpDownVote()
    createCommentForm()
    createCommentSection()
}

export const initializeFunctionality = () => {
    createImageFunctionality()
    createVoteFunctionality()
    createCommentFormFunctionality()
    createCommentSectionFunctionality()
    newCatButtonFunctionality()
}