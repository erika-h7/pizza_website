import React from 'react'
import styles from './Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {


    const pizzas = [

        {
            id: 1,
            name: 'Cheese Pizza',
            slug: 'cheese-pizza',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            price: 9.99,
        },
        {
            id: 2,
            name: 'Meat Feast',
            slug: 'meat-feast',
            toppings: ['ham', 'bacon', 'pepperoni', 'sausage'],
            image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
            price: 15.99,
        },
        {
            id: 3,
            name: 'Suprime',
            slug: 'suprime',
            toppings: ['olives', 'pinapple', 'ham', 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 12.99,
        },
        {
            id: 4,
            name: 'Pepperoni Pizza',
            slug: 'pepperoni-pizza',
            toppings: ['mozzarella cheese', 'pepperoni'],
            image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
            price: 14.99,
        },
        {
            id: 5,
            name: 'Smoked Sausage Pizza',
            slug: 'smoked-sausage-pizza',
            toppings: ['sausage', 'tomato', 'olive'],
            image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
            price: 9.99,
        },
        {
            id: 6,
            name: 'Egg & Sausage Pizza',
            slug: 'egg-and-sausage-pizza',
            toppings: ['sausage', 'egg'],
            image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 13.99,
        }
    ]

    // SEARCH BAR INPUT / HANDLELING
    const [keyword, setKeyword] = useState('');

    const filteredPizzas = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
    )

    const onInputChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }

    return (
        <div>
            <div className={styles.searchWrapper} >
                <input placeholder="Search for pizza or toppings..." className={styles.searchBar} onChange={onInputChange}/>
            </div>

            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ?
                    (
                        <div className={styles.nopeContainer}>Sorry 😅 there is no pizza or topping with that.</div>
                    )
                    :
                    (
                        filteredPizzas.map(pizza => {
                            return (

                                <div className={styles.pizzaItem} key={pizza.id}>
                                    <Link href={`/${pizza.slug}`} >
                                        <a className={styles.pizzaBox}>
                                            <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                                            <div className={styles.pizzaText}>
                                                <p className={styles.pizzaHeader}>{pizza.name}</p>
                                                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                                                <p className={styles.pizzaPrice}>$ {pizza.price}</p>
                                            </div>
                                        </a>
                                    </Link>

                                </div>
                            )
                        })
                    )    
                }
            </div>
        </div>
    )
};
