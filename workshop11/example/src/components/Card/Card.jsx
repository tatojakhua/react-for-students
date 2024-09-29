import React, { useState } from "react";
import { listItems } from "../../constants/data";
import { useEffect } from "react";
function Card() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1500);
  }, []);

  return (
    <div>
      <form>
        <h1 id="headline">Card Component</h1>
        <p>random text</p>
        <label htmlFor="name"> Name</label>
        <input type="text" id="name" name="name" />
        <input type="password" placeholder="password" />
      </form>
      <div data-testid="custom-div">
        <ul>
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {isLoading ? <button>test</button> : null}
    </div>
  );
}

export default Card;
