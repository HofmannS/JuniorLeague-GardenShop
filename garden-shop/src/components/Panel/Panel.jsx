import React from "react";
import "./Panel.scss";
import LineButton from "@components/LineButton/LineButton";
import { Link } from "react-router-dom";

const Panel = ({
  title,
  items,
  item_limit,
  renderItem,
  buttonText,
  link,
  isLoading,
  error,
  skeleton,
  children,
}) => {
  const visibleItems = item_limit ? items.slice(0, item_limit) : items;

  if (error) {
    return <div className="panel__error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="panel">
        <div className="panel__header">
          <h2 className="panel__header-title">{title}</h2>
          {buttonText && (
            
              <LineButton name={buttonText} link={link} className="panel__header-button"/>
            
          )}
        </div>
        {children}
        <div className="panel__list">
          {isLoading ? skeleton(item_limit) : visibleItems.map(renderItem)}
        </div>
        {buttonText && (
          <div className="panel__footer-button">
            <Link to={link}>
              <button className="panel__footer-button-btn">
                {buttonText}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Panel;
