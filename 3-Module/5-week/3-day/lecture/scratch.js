window.onload = () =>{

    const getRandomNum = () =>{
        let min = 0;
        let max = 255;

        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);

    }

    const addElButton = document.querySelector('.add-el-button')

    addElButton.addEventListener('click', event =>{
        // window.alert('test')
        //! get randomized rbg for background color store in array
        let rgb1 = [getRandomNum(), getRandomNum(), getRandomNum()]
        let rgb2 = [getRandomNum(), getRandomNum(), getRandomNum()]

        //! get the parent container we are adding the element to.
        const parent = document.querySelector('.object-container')

        //! create the div element

        const newDiv = document.createElement('div')

        //! add inner text "I was created with javascript!"

        newDiv.innerText = 'I was created with javascript'

        //! add inline styling for background color

        newDiv.style.backgroundColor = `rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})`


        //! add inline styling for text-color

        newDiv.style.color= `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`



        //! add class create-square to div using .setAttribute()
        newDiv.setAttribute('class', 'create-square')




        //! append the newly created div to object container

        parent.appendChild(newDiv)




    })


    const removeElButton = document.querySelector('.remove-el-button')

    removeElButton.addEventListener('click', event =>{
        // window.alert('test')
        //! set removeEl = object-container.children[0]
        const parent = document.querySelector('.object-container')

        parent.removeChild(parent.firstChild)

        // console.log(removeEl);

        //! can target element and remove it
        // removeEl.remove()

    })

    const addAttribute = document.querySelector('.add-attribute')

    addAttribute.addEventListener('click', event =>{
        //! get the element we want to add the attribute to.

        let ele = document.getElementById('uncolored')


        //! add the attribute of class to colored

        ele.setAttribute('class', 'colored')



        //! change the inner text to I have a color class now!
        ele.innerText = 'I have a color class now!'



    })

    const removeAttribute = document.querySelector('.remove-attribute')

    removeAttribute.addEventListener('click', event =>{
        //! get the element we want to remove the attribute.
        let ele = document.getElementById('uncolored')



        //! remove the attribute of class to colored

        ele.removeAttribute('class')



        //! change the inner text to I lost my color class!
        ele.innerText = 'I lost my color class D='


    })

}
