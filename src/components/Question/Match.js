import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { Avatar, Typography, TextField } from "@material-ui/core";

import accountant from "../../images/mod6-unit6/accountant.jfif";
import chef from "../../images/mod6-unit6/chef.jfif";
import computerprogrammer from "../../images/mod6-unit6/computerprogrammer.jfif";
import firefighter from "../../images/mod6-unit6/firefighter.jfif";
import flightattendant from "../../images/mod6-unit6/flightattendant.jfif";
import manager from "../../images/mod6-unit6/manager.jfif";
import nurse from "../../images/mod6-unit6/nurse.jfif";
import photographer from "../../images/mod6-unit6/photographer.jfif";
import salesclerk from "../../images/mod6-unit6/salesclerk.jfif";
import veterinarian from "../../images/mod6-unit6/veterinarian.jfif";

import { Jobs } from "../../shared/models";

const MatchImage = ({ src, alt }) => {
  return (
    <Avatar
      alt={alt}
      src={src}
      variant="square"
      style={{
        width: 100,
        height: 100,
      }}
    />
  );
};

function Match({ match, matchAnswers, chosen, updateChosen, updateMatch }) {
  const [value, setValue] = React.useState(matchAnswers[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
      }}
    >
      <Typography variant="h6" style={{ minWidth: "50%" }}>
        {match === Jobs.ACCOUNTANT && (
          <MatchImage src={accountant} alt={match} />
        )}
        {match === Jobs.CHEF && <MatchImage src={chef} alt={match} />}
        {match === Jobs.COMPUTERPROGRAMMER && (
          <MatchImage src={computerprogrammer} alt={match} />
        )}
        {match === Jobs.FIREFIGHTER && (
          <MatchImage src={firefighter} alt={match} />
        )}
        {match === Jobs.FLIGHTATTENDANT && (
          <MatchImage src={flightattendant} alt={match} />
        )}
        {match === Jobs.MANAGER && <MatchImage src={manager} alt={match} />}
        {match === Jobs.NURSE && <MatchImage src={nurse} alt={match} />}
        {match === Jobs.PHOTOGRAPHER && (
          <MatchImage src={photographer} alt={match} />
        )}
        {match === Jobs.SALESCLERK && (
          <MatchImage src={salesclerk} alt={match} />
        )}
        {match === Jobs.VETERINARIAN && (
          <MatchImage src={veterinarian} alt={match} />
        )}

        {match}
      </Typography>
      <Autocomplete
        style={{ flex: 1, maxWidth: 184 }}
        id={match}
        value={value}
        options={matchAnswers}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          updateChosen((chosen) => {
            if (newInputValue.length === 0) {
              return chosen.filter((option) => option !== value);
            }

            if (chosen.includes(newInputValue)) {
              return chosen;
            }

            return [...chosen, newInputValue];
          });
          setInputValue(newInputValue);
          updateMatch({ [match]: newInputValue });
        }}
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
