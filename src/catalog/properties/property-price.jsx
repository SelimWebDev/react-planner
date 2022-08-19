import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel, FormNumberInput } from '../../components/style/export';
import PropertyStyle from './shared-property-style';
import { useEffect } from 'react';

export default function PropertyPrice({value, onUpdate, configs, sourceElement, internalState, state}) {

  // si config.length, on multiplie le prix uniteur x longueur(mur),
  // sinon on renvoie prix unitaire (porte)
  // a modifier pour prendre en charge tout les éléments
  let price
  configs.length ? price = value * configs.length.get('length') : price = value

  let update = (val) => {

    if (configs.hook) {
      return configs.hook(val, sourceElement, internalState, state).then(_val => {
        return onUpdate(_val);
      });
    }

    return onUpdate(val);
  };

  return (
    <table className="PropertyPrice" style={PropertyStyle.tableStyle}>
      <tbody>
      <tr>
        <td style={PropertyStyle.firstTdStyle}>
          <FormLabel>{configs.label}</FormLabel>
        </td>
        <td>
          <FormNumberInput value={price} onChange={event => update(event.target.value)}/>
        </td>
      </tr>
      </tbody>
    </table>
  );
}

PropertyPrice.propTypes = {
  value: PropTypes.any.isRequired,
  onUpdate: PropTypes.func.isRequired,
  configs: PropTypes.object.isRequired,
  sourceElement: PropTypes.object,
  internalState: PropTypes.object,
  state: PropTypes.object.isRequired
};