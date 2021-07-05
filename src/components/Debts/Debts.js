import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Debts.css';

export default function PagesDebts() {
    return (
        <div className="debts_list">
            <div className="debts_header">
                <h2>Débitos</h2>
            </div>
            <div className="debts_content"></div>
        </div>
    )
}