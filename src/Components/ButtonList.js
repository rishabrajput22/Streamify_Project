import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="News" />
      <Button name="Standup" />
      <Button name="Cricket" />
      <Button name="Football" />
      <Button name="BasketBall" />
      <Button name="Cooking" />
      <Button name="Anime" />
      <Button name="Remote" />
      <Button name="Comedy" />
      <Button name="Politics" />
      <Button name="Elections" />
    </div>
  );
};

export default ButtonList;
