import React, { useState } from "react";

const Form = ({ add }) => {
   const today = new Date().toLocaleString("en-CA", { dateStyle: "short" });
   const [value, setValue] = useState("");
   const [todayDate, setTodayDate] = useState(today);

   const onFormSubmit = (e) => {
      e.preventDefault();

      if (value) {
         add(value, todayDate);
      }
   };

   return (
      <>
         <form action="" onSubmit={onFormSubmit}>
            <input type="date" name="date" id="date" value={todayDate} onChange={(e) => setTodayDate(e.target.value)} min="2020-01-01" max="2050-12-31" />

            <input type="text" name="thoughts" id="thoughts" placeholder="How are you today?" value={value} onChange={(e) => setValue(e.target.value)} />

            <input type="submit" name="submit-btn" id="submit-btn" value="Save" />
         </form>
      </>
   );
};

export default Form;
