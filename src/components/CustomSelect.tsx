import React from 'react';
import { Option } from '../data/model/Option';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core';

interface IProps {
  items: Option[];
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>,
    child: React.ReactNode
  ) => void;
  label?: string;
  helperText?: string;
  style?: React.CSSProperties;
  width?: number;
}

const CustomSelect: React.FC<IProps> = (props: IProps) => {
  return (
    <FormControl
      style={Object.assign(
        {},
        {
          width: props.width ?? 100,
        },
        props.style
      )}
    >
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <Select value={props.value} onChange={props.onChange}>
        {props.items.map((item, i) => (
          <MenuItem key={`custom_select_${i}`} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {props.helperText && <FormHelperText>{props.helperText}</FormHelperText>}
    </FormControl>
  );
};
export default CustomSelect;
