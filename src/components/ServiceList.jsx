// import React from 'react';
import React, { useEffect, useState } from 'react';

// import { addItem, deleteItem, readRentItems, rentItems } from '../script/scriptService';
import { addItem, deleteItem } from '../script/scriptService';

import data from '../data/inventory.json';

function ServiceList ( { itemClass, type } ) {

    // const rentItems = data.services.filter((rentItem) => { return rentItem.id === Number(itemClass); });
    // const rentItems = (`data.${type}.filter((rentItem) => { return rentItem.id === Number(itemClass); })`);
    // const rentItems = data[type].filter((rentItem) => { return rentItem.id === Number(itemClass); });

    const [rentItems, setRentItems] = useState(data[type].filter((rentItem) => rentItem.id === Number(itemClass)));

    // readRentItems(data[type], itemClass);

    const typeClass = (type === 'services') ? 'service' : 'boat';

    // console.log(data[type]);
    // console.log(itemClass);
    // console.log(rentItems);
    // console.log(typeClass);

    useEffect(() => {

        const addButtons = document.querySelectorAll(`.unit-add-button-${itemClass}`);
        const delButtons = document.querySelectorAll(`.unit-del-button-${itemClass}`);

        // console.log(addButtons);
        // console.log(delButtons);
    
        const handleAddClick = (e) => {
            addItem(parseInt(e.target.id), typeClass, rentItems, setRentItems);
        };

        const handleDelClick = (e) => {
            deleteItem(parseInt(e.target.id), typeClass, rentItems, setRentItems);
        };

        addButtons.forEach((button) => {
            button.removeEventListener("click", handleAddClick);
            button.addEventListener("click", handleAddClick);
    
        });
    
        delButtons.forEach((button) => {
            button.removeEventListener("click", handleDelClick);
            button.addEventListener("click", handleDelClick);
        });
         
        return () => { addButtons.forEach((button) => { 
                        button.removeEventListener("click", handleAddClick); });

                       delButtons.forEach((button) => { 
                        button.removeEventListener("click", handleDelClick); });
                     };
    }, []);

    return (
        <>
            {/* {rentItems.map((rentItem) => ( 
                <div key={rentItem.id} className={`${typeClass}-${rentItem.id} ${typeClass}`}>
                    <strong>${rentItem.price}</strong>
                    <div className={`mid-${rentItem.id} unit`}>
                        <button className={`unit-button unit-del-button-${rentItem.id}`} id={rentItem.id}>-</button>
                        <p>{rentItem.quantity}</p>
                        <button className={`unit-button unit-add-button-${rentItem.id}`} id={rentItem.id}>+</button>
                    </div>
                </div>  ))} */}
            {rentItems.map((rentItem) => ( 
                <div key={rentItem.id} className={`service-${rentItem.id} service`}>
                    <strong>${rentItem.price}</strong>
                    <div className={`mid-${rentItem.id} unit`}>
                        <button className={`unit-button unit-del-button-${rentItem.id}`} id={rentItem.id}>-</button>
                        <p>{rentItem.quantity}</p>
                        <button className={`unit-button unit-add-button-${rentItem.id}`} id={rentItem.id}>+</button>
                    </div>
                </div>  ))}
        </>
  );
};

export default ServiceList;

