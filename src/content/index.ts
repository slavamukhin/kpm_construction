import Kitchen from '../img/kitchen.jpg'
import Bathrooms from '../img/bathroom.jpg'
import Basement from '../img/basement.jpg'
import after from '../img/after.jpg'
import before from '../img/before.jpg'
import slide1 from '../img/after.jpg'
import slide3 from '../img/before.jpg'
import slide2 from '../img/plumbing.jpg'

export const content = {
  main: {
    subTitle: 'Pash Khoroshev Solution',
    title: 'New renovation technology for your bathroom, kitchen, basement, pool, decking, deck',
    button: 'Text me in WhatsApp'
  },
  services: {
    title: 'What are your needs?',
    servicesCard: [
      {
        id: 1,
        title: 'For Bathrooms',
        text: 'We turn your old bathrooms into brand new modern and fully functioning rooms with high-quality plumbing.',
        img: Bathrooms
      },
      {
        id: 2,
        title: 'For Kitchen',
        text: 'Kitchen is a number one room in every home, and it requires special attention while doing pipe repairs.',
        img: Kitchen
      },
      {
        id: 3,
        title: 'For Basement',
        text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
        img: Basement
      },
      {
        id: 4,
        title: 'For Pool',
        text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
        img: Bathrooms
      },
      {
        id: 5,
        title: 'For Decking',
        text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
        img: Kitchen
      },
      {
        id: 6,
        title: 'For Deck',
        text: 'Not only do we have premium products and fixtures, but our store also offers installation services.',
        img: Basement
      }
    ]
  },
  tiling: {
    title: 'Titling installation',
    text: 'Today, the technology allows creating all types of titling parts and accessories for your home and office. We use premium products and quality service.',
    button: 'Request a titler'
  },
  comparison: {
    title: 'Your bathroom will look like this...',
    after,
    before
  },
  contact: {
    title: 'Innovative Approach',
    text: 'Professional installation is key to the impeccable functioning of your pipes, faucets and heaters. Let us take care of the issues in your homes and offices today.',
    button: 'Contact Us'
  },
  myWork: {
    title: 'My Works',
    sliders: [
      slide1,
      slide2,
      slide3
    ]
  }
}