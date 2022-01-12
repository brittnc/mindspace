import React from 'react';




const CARDS = 9;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
    <div className='card'>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);

const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
}
