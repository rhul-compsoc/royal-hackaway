document.addEventListener('DOMContentLoaded', () => {
  console.log('Collapse without jQuery loaded!');

  [...document.getElementsByTagName('button')]
    .filter(element => element.dataset?.toggle === 'collapse')
    .forEach((element) => {
      let toggleStatus = element.getAttribute('aria-expanded') === 'true'
      let processing = false;

      const targetElement = document.querySelector(element.dataset.target)

      element.addEventListener('click', () => {
        if (!processing) {
          processing = true
          toggleStatus = !toggleStatus
          element.setAttribute('aria-expanded', toggleStatus)

          const DELAY = 500;

          if (toggleStatus) {
            // Expand!
            targetElement.style.display = 'block'
            const futureHeight = targetElement.clientHeight
            targetElement.style.display = null

            requestAnimationFrame(() => {
              targetElement.classList.add('collapsing')
              targetElement.classList.remove('collapse')
              requestAnimationFrame(() => {
                targetElement.style.height = `${futureHeight}px`
              })
            })

            setTimeout(() => {
              targetElement.classList.add('collapse', 'show')
              targetElement.classList.remove('collapsing')
              targetElement.style.height = null;
              processing = false
            }, DELAY)
          } else {
            // Unexpand!

            // Get the current height being displayed in the web browser
            targetElement.style.height = `${targetElement.clientHeight}px`

            // Get CSS to 
            requestAnimationFrame(() => {
              targetElement.classList.add('collapsing')
              targetElement.classList.remove('show', 'collapse')
              requestAnimationFrame(() => {
                targetElement.style.height = null
              })
            })


            setTimeout(() => {
              targetElement.classList.add('collapse')
              targetElement.classList.remove('collapsing')
              processing = false
            }, DELAY)
          }
        }
      })
    })
})
