import React, {useState, useEffect} from 'react';
import * as COOKIENAMES from "../../helpers/CookieNames";
import history from "../../helpers/history";
import Cookies from 'universal-cookie'
import NavTab from './NavTabs'
import {CityLocationCard} from './CityLocationCard/CityLocationCard'

const cookies = new Cookies()

export function Home() {
    const [city, setCity]=useState('San Francisco, CA')

    return (
        <div>
        <CityLocationCard city={city}/>
        <NavTab />
        </div>
    )

}