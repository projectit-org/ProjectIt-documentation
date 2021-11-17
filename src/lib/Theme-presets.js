const PI_DARKBLUE = "#00008b";
const PI_LIGHTBLUE = "#d3e3fd";
export const themePresets = [
    {
        name: "light",
        colors: {
            color: PI_DARKBLUE,
            inverse_color: PI_LIGHTBLUE,
            bg_app_bar: PI_DARKBLUE,
            text_app_bar: "white",
            bg_color: PI_LIGHTBLUE,
            divider: PI_DARKBLUE,
            list_divider: PI_DARKBLUE,
            slider: PI_DARKBLUE,
            accent: "#f50057",
            primary_button_text: "black",
            secondary_button_text: "grey",
            // TODO find some appealing default values for the user message colors
            user_mess_bg_error: "#ff4d4d",
            user_mess_bg_warning: '#ffff80',
            user_mess_bg_hint: '#d9d9d9',
            user_mess_bg_info: '#d9d9d9',
            user_mess_text_error: 'black',
            user_mess_text_warning: '#ff0',
            user_mess_text_hint: '#ff0',
            user_mess_text_info: '#f50057',
            user_mess_button_text_error: 'black',
            user_mess_button_text_warning: '#ff0',
            user_mess_button_text_hint: '#ff0',
            user_mess_button_text_info: '#f50057',
            bg_editor: "white",
            text_editor: "darkblue",
            // TextBox
            bg_empty_before_text_box: "#f4f4f4",
            bg_text_box: "white",
            color_text_box: PI_DARKBLUE,
            color_empty_before_text_box: PI_DARKBLUE,
            // AliasBox
            bg_empty_before_alias_box: "#f4f4f4",
            bg_alias_box: "white",
            color_alias_box: PI_DARKBLUE,
            /* Selection */
            bg_selected: "rgba(211, 227, 253, 255)",
            border_selected: PI_DARKBLUE,
            /* Dropdown Component */
            bg_dropdown_component: "#f4f4f4",
            border_dropdown_component: PI_DARKBLUE,
            color_dropdownitem_component: PI_DARKBLUE,
            /* Buttons */
            button_color: "white",
            button_bg_color: "rgba(0,0,139, 1)",
            button_active: "rgba(0,0,139, .7)",
            button_hover: "rgba(0,0,139, .8)",
            ripple_color: "#c199f9",
            /* Tooltips */
            tooltip_color: "white",
            tooltip_background: "red",
            /* Navigation Tree */
            active: "white",
            /* Syntax Highlighting */
            code_color: "#393A34",
            code_background: "#C1DEF1",
            code_background_color: "white",
            code_keyword: "#0000ff",
            token_color_string: "#A31515",
            token_keyword: "#0000ff",
            token_constant: "#36acaa",
            token_not_pre: "#db4c69",
            token_number: "#36acaa",
            token_operator: "#393A34",
            /* to be done */
            token_att_value: "#ce9178",
            token_atrule: "#c586c0",
            token_function: "#a237b8",
            token_regex: "#d16969",
            token_boolean: "#569cd6",
            token_class_name: "#c21016",
            /* end to be done */
            token_comment: "#008000",
            code_border: "#dddddd",
            /* Links */
            link: "#a237b8",
            link_visited: "#7381de",
            /* Tables */
            note_background: "#C199F93C",
            figure_background: "cornsilk",
            table_background: "cornsilk",
            table_heading: "#8ed4c6",
            block_quote_background: "cornsilk",
        },
        fonts: {
            size_editor: "14px",
            style_editor: "normal",
            weight_editor: "normal",
            family_editor: "Arial"
        }
    },
    {
        name: "dark",
        colors: {
            color: PI_LIGHTBLUE,
            inverse_color: PI_DARKBLUE,
            bg_app_bar: PI_LIGHTBLUE,
            bg_color: PI_DARKBLUE,
            divider: PI_LIGHTBLUE,
            list_divider: PI_LIGHTBLUE,
            slider: PI_LIGHTBLUE,
            accent: "#f50057",
            primary_button_text: "yellow",
            secondary_button_text: "white",
            // TODO find some appealing default values for the user message colors
            user_mess_bg_error: "#ff4d4d",
            user_mess_bg_warning: '#ffff80',
            user_mess_bg_hint: '#d9d9d9',
            user_mess_bg_info: '#d9d9d9',
            user_mess_text_error: 'black',
            user_mess_text_warning: '#ff0',
            user_mess_text_hint: '#ff0',
            user_mess_text_info: '#f50057',
            user_mess_button_text_error: 'black',
            user_mess_button_text_warning: '#ff0',
            user_mess_button_text_hint: '#ff0',
            user_mess_button_text_info: '#f50057',
            bg_editor: "darkblue",
            text_editor: "white",
            // TextBox
            bg_empty_before_text_box: "rgba(1, 1, 150, 255)",
            bg_text_box: PI_DARKBLUE,
            color_empty_before_text_box: "white",
            color_text_box: "white",
            // AliasBox
            bg_empty_before_alias_box: "#f4f4f4",
            bg_alias_box: "white",
            color_alias_box: PI_DARKBLUE,
            // Selection
            bg_selected: "rgba(21, 21, 250, 255)",
            border_selected: PI_LIGHTBLUE,
            // Dropdown Component
            bg_dropdown_component: PI_DARKBLUE,
            border_dropdown_component: PI_LIGHTBLUE,
            color_dropdownitem_component: PI_LIGHTBLUE,
            /* Buttons */
            button_color: "black",
            button_bg_color: "rgba(211, 227, 253, 1)",
            button_active: "rgba(211, 227, 253, .7)",
            button_hover: "rgba(211, 227, 253, .8)",
            ripple_color: "#c6b1e4",
            /* Tooltips */
            tooltip_color: "black",
            tooltip_background: "red",
            /* Navigation Tree */
            active: "black",
            /* Syntax Highlighting */
            code_color: "#d4d4d4",
            code_background: "#264F78",
            code_background_color: "#1e1e1e",
            code_keyword: "#c586c0",
            token_color_string: "#ce9178",
            token_keyword: "#569CD6",
            token_constant: "#9cdcfe",
            token_number: "#b5cea8",
            token_not_pre: "#db4c69",
            token_operator: "#d4d4d4",
            token_att_value: "#ce9178",
            token_atrule: "#c586c0",
            token_function: "#dcdcaa",
            token_regex: "#d16969",
            token_boolean: "#569cd6",
            token_class_name: "#4ec9b0",
            token_comment: "#6a9955",
            code_border: "#1e1e1e",
            /* Links */
            link: "#ddb3e5",
            link_visited: "#73dede",
            /* Tables */
            note_background: "#C199F93C",
            figure_background: "cornsilk",
            table_background: "#715d0a",
            table_heading: "#096552",
            block_quote_background: "cornsilk",
        },
        fonts: {
            size_editor: "14px",
            style_editor: "normal",
            weight_editor: "normal",
            family_editor: "monospace"
        }
    }
];
//# sourceMappingURL=Theme-presets.js.map