import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="work">
            <div>
              {" "}
              <h4>{props.company}</h4>
              <p className="info">{props.title}</p>
              <p className="date">{props.years}</p>
            </div>
            <img className="logo" alt="logo" src={props.image} />
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="work">
          <Typography>
            <p className="info">{props.description}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
