import {
  require_classnames,
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-6RCSRPQS.js";
import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-bootstrap/esm/DropdownDivider.js
var React = __toESM(require_react());
var import_classnames = __toESM(require_classnames());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var DropdownDivider = React.forwardRef(({
  className,
  bsPrefix,
  as: Component = "hr",
  role = "separator",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "dropdown-divider");
  return (0, import_jsx_runtime.jsx)(Component, {
    ref,
    className: (0, import_classnames.default)(className, bsPrefix),
    role,
    ...props
  });
});
DropdownDivider.displayName = "DropdownDivider";
var DropdownDivider_default = DropdownDivider;

export {
  DropdownDivider_default
};
//# sourceMappingURL=chunk-FWEW72WL.js.map
