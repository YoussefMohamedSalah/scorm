import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { Typography, TextField } from "@material-ui/core";

function Match({ match, matchAnswers, chosen, updateChosen, updateMatch }) {
  const [values, setValues] = React.useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 12,
      }}
    >
      <Typography variant="h6" style={{ minWidth: "50%", maxWidth: "50%" }}>
        {match}
      </Typography>
      <Autocomplete
        style={{ flex: 1, margin: "8px 16px" }}
        id={match}
        value={values}
        options={matchAnswers}
        onChange={(event, newValue) => {
          let matchValue = "";

          for (let i = 0; i < newValue.length; i++) {
            matchValue =
              i === 0
                ? matchValue + newValue[i]
                : matchValue + "-" + newValue[i];
          }

          updateChosen((chosen) => {
            if (values.length > newValue.length) {
              // remove element form chosen
              const removed = values.filter(
                (value) => !newValue.includes(value)
              );

              const newChosen = chosen.filter(
                (value) => !removed.includes(value)
              );

              return newChosen;
            } else {
              const newValues = [];

              for (let option of newValue) {
                if (chosen.indexOf(option) === -1) {
                  newValues.push(option);
                }
              }

              return [...chosen, ...newValues];
            }
          });

          updateMatch({ [match]: matchValue });
          setValues(newValue);
        }}
        multiple
        getOptionDisabled={(option) => {
          let disabled = false;

          if (chosen.includes(option)) disabled = true;
          if (option === "Select Match") disabled = true;

          return disabled;
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" size="small" />
        )}
      />
    </div>
  );
}

export default Match;
