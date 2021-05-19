import { extend } from "vee-validate";
import { email, min, max, required } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "{_field_} is required.",
});

extend("email", {
  ...email,
  message: "{_field_} is invalid.",
});

extend("min", {
  ...min,
  message: "{_field_} must be greater than {length} characters long.",
});

extend("max", {
  ...max,
  message: "{_field_} must be less than {length} characters long.",
});
