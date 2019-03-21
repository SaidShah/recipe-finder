import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const NutritionCard = (props) => (
  <div>
  {console.log(props)}
    <h1 className="bold-text">Ingredient: {props.name}</h1>
    <h2 className="bold-text">Calories: {props.info.calories}</h2>
    {props.info.dietLabels ? <h2 className="bold-text">Health Benefits: {props.info.dietLabels.join(" ").replace(/_/g," ")}</h2>  : null}
    <div className="table-div">
    <MDBTable>
      <MDBTableHead color="primary-color" textWhite >
        <tr className="font-2">
        <th>Calcium</th>
        <th>Carbs</th>
        <th>Cholesterol</th>
        <th>Energy</th>
        <th>Monounsaturated</th>
        <th>Polyunsaturated</th>
        <th>Saturated</th>
        <th>Fat</th>
        <th>Transfat</th>
        <th>Iron</th>
        <th>Fiber</th>
        <th>Potassium</th>
        <th>Magnesium</th>
        <th>Sugars</th>
        <th>Protein</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody >
        <tr className="text-center font-2">
        <td>{props.info.totalNutrients.CA ? props.info.totalNutrients.CA.quantity.toFixed(2) : 0} {props.info.totalNutrients.CA ? props.info.totalNutrients.CA.unit : "NA"}</td>
        <td>{props.info.totalNutrients.CHOCDF ? props.info.totalNutrients.CHOCDF.quantity.toFixed(2) : 0} {props.info.totalNutrients.CHOCDF ? props.info.totalNutrients.CHOCDF.unit : "NA"}</td>
        <td>{props.info.totalNutrients.CHOLE ? props.info.totalNutrients.CHOLE.quantity.toFixed(2) : 0} {props.info.totalNutrients.CHOLE ? props.info.totalNutrients.CHOLE.unit : "NA"}</td>
        <td>{props.info.totalNutrients.ENERC_KCAL ? props.info.totalNutrients.ENERC_KCAL.quantity.toFixed(2) : 0} {props.info.totalNutrients.ENERC_KCAL ? props.info.totalNutrients.ENERC_KCAL.unit : "NA"}</td>
        <td>{props.info.totalNutrients.FAMS ? props.info.totalNutrients.FAMS.quantity.toFixed(2) : 0} {props.info.totalNutrients.FAMS ? props.info.totalNutrients.FAMS.unit : "NA"}</td>
        <td>{props.info.totalNutrients.FAPU ? props.info.totalNutrients.FAPU.quantity.toFixed(2) : 0} {props.info.totalNutrients.FAPU ? props.info.totalNutrients.FAPU.unit : "NA"}</td>
        <td>{props.info.totalNutrients.FASAT ? props.info.totalNutrients.FASAT.quantity.toFixed(2) : 0} {props.info.totalNutrients.FASAT ? props.info.totalNutrients.FASAT.unit : "NA"}</td>
        <td>{props.info.totalNutrients.FAT ? props.info.totalNutrients.FAT.quantity.toFixed(2) : 0} {props.info.totalNutrients.FAT ? props.info.totalNutrients.FAT.unit : "NA"}</td>
        <td>{props.info.totalNutrients.FATRN ? props.info.totalNutrients.FATRN.quantity.toFixed(2) : 0} {props.info.totalNutrients.FATRN ? props.info.totalNutrients.FATRN.unit : "NA"}</td>
        <td>{props.info.totalNutrients.FE ? props.info.totalNutrients.FE.quantity.toFixed(2) : 0} {props.info.totalNutrients.FE ? props.info.totalNutrients.FE.unit : "NA"}</td>
        <td>{props.info.totalNutrients.FIBTG ? props.info.totalNutrients.FIBTG.quantity.toFixed(2) : 0} {props.info.totalNutrients.FIBTG ? props.info.totalNutrients.FIBTG.unit : "NA"}</td>
        <td>{props.info.totalNutrients.K ? props.info.totalNutrients.K.quantity.toFixed(2) : 0} {props.info.totalNutrients.K ? props.info.totalNutrients.K.unit : "NA"}</td>
        <td>{props.info.totalNutrients.MG ? props.info.totalNutrients.MG.quantity.toFixed(2) : 0} {props.info.totalNutrients.MG ? props.info.totalNutrients.MG.unit : "NA"}</td>
        <td>{props.info.totalNutrients.SUGAR ? props.info.totalNutrients.SUGAR.quantity.toFixed(2) : 0} {props.info.totalNutrients.SUGAR ? props.info.totalNutrients.SUGAR.unit : "NA"}</td>
        <td>{props.info.totalNutrients.PROCNT ? props.info.totalNutrients.PROCNT.quantity.toFixed(2) : 0} {props.info.totalNutrients.PROCNT ? props.info.totalNutrients.PROCNT.unit : "NA"}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>

  </div>
);

export default NutritionCard;
