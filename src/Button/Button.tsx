import React from "react"

import { ButtonProps } from "./Button.types"

import "./Button.css"

const Button: React.FC<ButtonProps> = ({ label }) => (
  <div className="button-container">
    <label className="button-label">label</label>
  </div>
)

export default Button
