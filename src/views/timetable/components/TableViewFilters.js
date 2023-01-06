import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export const ButtonsFilterGroup = props => (
 <ButtonGroup variant="outlined" size="small">
   {
     props.buttons.map(
       (buttonMeta) => (
         <Button
           key={buttonMeta.text}
           onClick={buttonMeta.onClick}
           color={buttonMeta.checked ? "secondary" : "default"}
         >
          {buttonMeta.text}
         </Button>
       )
     )
   }
 </ButtonGroup>
);
