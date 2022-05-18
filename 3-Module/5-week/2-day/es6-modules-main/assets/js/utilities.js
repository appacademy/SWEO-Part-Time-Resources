export let name12 = 'baylen'

const getIndex = () => {
    const wrapper = document.getElementById('wrapper');
    return parseInt(wrapper.dataset.index);
};

export default getIndex