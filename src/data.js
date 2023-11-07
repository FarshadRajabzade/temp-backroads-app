import tourImage1 from './images/tour-1.jpeg'
import tourImage2 from './images/tour-2.jpeg'
import tourImage3 from './images/tour-3.jpeg'
import tourImage4 from './images/tour-4.jpeg'

export const pageLinks = [
    {id: 1, href: '#home', text: 'Home' , class: 'nav-link'},
    {id: 2, href: '#about', text: 'About' , class: 'nav-link'},
    {id: 3, href: '#services', text: 'Services' , class: 'nav-link'},
    {id: 4, href: '#tours', text: 'Tours' , class: 'nav-link'},
]

export const socialLinks = [
    {id: 1, href: '#', icon: 'fab fa-facebook'},
    {id: 2, href: '#', icon: 'fab fa-twitter'},
    {id: 3, href: '#', icon: 'fab fa-squarespace'},
]

export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                                Asperiores, officia.'
    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'endless hiking',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                                Asperiores, officia.'
    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'amazing comfort',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.\n' +
            '                                Asperiores, officia.'
    },

]

export const tours = [
    {
        id: 1,
        image: tourImage1,
        date: 'August 26th, 2020',
        title: 'Tibet Adventure',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        loc: 'China',
        duration: '6 days',
        price: 'From $2100'
    },
    {
        id: 2,
        image: tourImage2,
        date: 'August 26th, 2020',
        title: 'Tibet Adventure',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        loc: 'China',
        duration: '6 days',
        price: 'From $2100'
    },
    {
        id: 3,
        image: tourImage3,
        date: 'August 26th, 2020',
        title: 'Tibet Adventure',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        loc: 'China',
        duration: '6 days',
        price: 'From $2100'
    },
    {
        id: 4,
        image: tourImage4,
        date: 'August 26th, 2020',
        title: 'Tibet Adventure',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        loc: 'China',
        duration: '6 days',
        price: 'From $2100'
    },
]