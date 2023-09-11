import IconTextFieldWrapper from '../styled/components/IconTextFieldWrapper';

const IconTextField = ({label, id, type, icon, name, placeholder, fieldState, setFieldState, required}) => {
	const Icon = icon;
	const onFieldChange = (event) => {
		// If user changes the value of the field, automatically remove the invalid state
		if(setFieldState) setFieldState({value: event.target.value, valid: true});
	}
	return (
		<IconTextFieldWrapper>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				name={name}
				placeholder={placeholder}
				{...required && {required}}
				{...fieldState && !fieldState.valid && {className: 'invalid'}}
				onChange={onFieldChange}
			/>
			{Icon && <Icon className="form-input-icon" />}
		</IconTextFieldWrapper>
	);
}

export default IconTextField;