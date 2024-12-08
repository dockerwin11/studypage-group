import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import HeadInfo from './HeadInfo';

import erbLogo from "../images/invoice/erb_logo.png";
import favicon from "../images/favicon/favicon.ico";

// import '../css/invoice.css';
// import '../css/invoicePrint.css';

function Invoice() {

    const today = new Date();
    // const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    const [currentDate, setCurrentDate] = useState(today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate());

    // const number = "#" + today.getFullYear()+ (today.getMonth()+1) +today.getDate();
    const [currentNumber, setCurrentNumber] = useState("#" + today.getFullYear()+ (today.getMonth()+1) +today.getDate());

    // document.getElementById("currentDate").textContent = date;
    // document.getElementById("number").textContent = number;

    const [invoiceValue, setInvoiceValue] = useState('');
    // console.log(invoiceValue);

    const [totalValue, setTotalValue] = useState('');

    const [noOfItemValue, setNoOfItemValue] = useState('');

    const handlePrint = (event) => { event.preventDefault(); window.print(); };

    useEffect(() => {
        // const updatedCurDate = document.getElementById("currentDate");
        // const updatedNumber = document.getElementById("number");

        // updatedCurDate.textContent = date;
        // updatedNumber.textContent = number;

        setCurrentDate(today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate());
        setCurrentNumber("#" + today.getFullYear()+ (today.getMonth()+1) +today.getDate());

        // Get the value from localStorage
        const invoice = localStorage.getItem('invoice-paid');
        // console.log(invoice);
        // console.log(invoiceValue);
        setInvoiceValue(invoice ? invoice.replaceAll(",", "") : '');

        // Get the value from localStorage
        const noOfItemValue = localStorage.getItem('noOfItem');
        // console.log(noOfItem_value);

        setNoOfItemValue(noOfItemValue);

        // Get the value from localStorage
        const totalValue = localStorage.getItem('total');
        // console.log(total_value);

        setTotalValue(totalValue);
        
        // Get the value from localStorage
        // const noOfItem = localStorage.getItem('noOfItem');
        // console.log(noOfItem);   
        // setNoOfItemValue(noOfItem ? noOfItem : '0 items');

        // return () => {
            
        // };
    }, [today]);

    return (
        <>
            <HeadInfo />
            <div className="invoice">
                <div className="invoice-flex">
                    <div className="invoice-header">
                        <div className="invoice-header-left">
                            <img src={erbLogo} alt="Company Logo" />
                            <h1>ERB Yachting</h1>
                            <p>Address: Kwun Tong Ferry Pier</p>
                            <p>Email: erbhk@erb.org</p>
                            <p>Phone: +852 3129 1183</p>
                        </div>
                    </div>

                    <div className="invoice-number">
                        <img src={favicon} alt="Company Logo" />
                        <h2>Invoice</h2>
                        {/* <p>Invoice Number: <span id="number">{currentNumber}</span></p> */}
                        <p>Invoice Number: {currentNumber}</p>
                        {/* <p>Date: <span id="currentDate">{currentDate}</span></p> */}
                        <p>Date: {currentDate}</p>
                    </div>
                </div>

                <div className="invoice-container">
                    <div className="item-header">
                        <div>Item</div>
                        <div>Quantity</div>
                        <div>Unit Price</div>
                    </div>

                    <hr className="hr-1" />

                    {invoiceValue ? (
                        <div className="cart-items" dangerouslySetInnerHTML={{ __html: invoiceValue }}></div> ) :
                        (   <div className="cart-items"> 
                                <div className="cart-item">
                                    <h3>CART</h3>
                                    <p className="qty">0</p>
                                    <p className="amount">$0</p>
                                    {/* <p className="noOfItems" dangerouslySetInnerHTML={{ __html: noOfItemValue }}></p>  */}
                                </div>
                            </div> )}

                    {totalValue ? (
                        <div className="cart-items">
                            <hr className="hr-2" />
                            <div className="cart-noOfItems">
                                <h3>CART</h3>
                                <p className="noOfItems" dangerouslySetInnerHTML={{ __html: noOfItemValue }} ></p>
                            </div>
                        </div> ) :
                        (   <div className="cart-items">
                                <hr className="hr-2" />
                                <div className="cart-noOfItems">
                                    <h3>CART</h3>
                                    <p className="noOfItems">0 items</p>
                                </div>
                            </div> )}
                    

                    <div className="cart-footer" >
                        <h3>Total</h3>
                        {totalValue ? (<p className="total" dangerouslySetInnerHTML={{ __html: totalValue }}></p>) : (<p className="total">$0</p>)}
                    </div>   
                    {/* {totalValue ? (
                        <div className="cart-footer" >
                            <h3>Total</h3>
                            <p className="total" dangerouslySetInnerHTML={{ __html: totalValue }}></p>
                        </div> ) :  
                        (   <div className="cart-footer">
                                <h3>Total</h3>
                                <p className="total">$0</p>
                            </div> )} */}
                </div>    

                <div className="invoice-footer">
                    <div className="text-center mt-3">
                        <p className="thanks">Thank you for your support</p>
                        {/* <a href="#" id="lnkPrint">Print</a> */}
                        <Link to="#" id="lnkPrint" onClick={handlePrint}>Print</Link> 
                        <br/><br/>
                        {/* <a href="index.html">Return Home</a> */}
                        <Link to="/">Return Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Invoice