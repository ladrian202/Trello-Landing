import React from "react";
import "../stylesheets/navigation.css"
import Button from "./buttons";

export default function Navigation() {
    return (
        <div className="navigation">
            <Button 
            type="Tertiary"
            label="Home"
            link="#"/>
            
            <Button 
            type="Tertiary"
            label="About us"
            link="#"/>
            
            <Button type="Tertiary"
            label="Login"
            link="#"/>
            
            <Button 
            type="Primary"
            label="Get Started"
            link="#"/>
        </div>
    )
}