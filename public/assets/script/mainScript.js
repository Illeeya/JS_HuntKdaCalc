import {
    Button
    , InputField
    , Label
} from "./DomElements.js";
//
const DIVIDER = document.createElement("hr");
DIVIDER.style.width = "100%";
DIVIDER.style.gridColumn = "1/4";
//
const KILLS_INPUT = new InputField("2/1/3/2", "KILL_INPUT");
const ASSISTS_INPUT = new InputField("2/2/3/3", "ASSIST_INPUT");
const DEATHS_INPUT = new InputField("2/3/3/4", "DEATH_INPUT");
//
//
function buildBasicCalc() {
    const basicCalc = document.getElementById("basicCalc");
    //
    const KILLS_LBL = new Label("Kills", "KILLS_INPUT", "1/1/2/2");
    const ASSISTS_LBL = new Label("Assists", "ASSISTS_INPUT", "1/2/2/3");
    const DEATHS_LBL = new Label("Deaths", "DEATHS_INPUT", "1/3/2/4");
    //
    basicCalc.appendChild(KILLS_LBL);
    basicCalc.appendChild(ASSISTS_LBL);
    basicCalc.appendChild(DEATHS_LBL);
    //
    basicCalc.appendChild(KILLS_INPUT);
    basicCalc.appendChild(ASSISTS_INPUT);
    basicCalc.appendChild(DEATHS_INPUT);
    //
    const CALCULATE_BUTTON = new Button("Calculate KDA", "3/1/4/4", "50%");
    CALCULATE_BUTTON.onclick = calculateKda;
    //
    basicCalc.appendChild(CALCULATE_BUTTON);
    //
    const KDA_LABEL = new Label("", "", "4/1/5/4", "kdaLabel");
    const KDA_VALUE_LABEL = new Label("", "", "5/1/6/4", "kdaValueLabel");
    KDA_VALUE_LABEL.style.fontSize = "larger";
    //
    basicCalc.appendChild(KDA_LABEL);
    basicCalc.appendChild(KDA_VALUE_LABEL);
    //
    function calculateKda() {
        const KILLS = KILLS_INPUT.value == null ? 0 : Number(KILLS_INPUT.value);
        const ASSISTS =
            ASSISTS_INPUT.value == null ? 0 : Number(ASSISTS_INPUT.value);
        const KA = KILLS + ASSISTS;
        const DEATHS = DEATHS_INPUT.value == null ? 0 : Number(DEATHS_INPUT.value);
        KDA_VALUE_LABEL.textContent =
            DEATHS == 0 ?
            "cannot be calculated if deaths amount is 0" :
            (KA / DEATHS).toFixed(2);

        KDA_LABEL.textContent = "KDA";
    }

    basicCalc.appendChild(DIVIDER.cloneNode(true));
}

function buildDesiredCalc() {
    const desiredCalc = document.getElementById("desiredCalc");

    const DESIRED_LABEL = new Label("Desired KDA", "DESIDER_INPUT", "1/1/2/4");
    desiredCalc.appendChild(DESIRED_LABEL);
    //
    const DESIRED_INPUT = new InputField("2/1/3/4", "DESIRED_INPUT");
    desiredCalc.appendChild(DESIRED_INPUT);
    //
    const CALCULATE_BUTTON = new Button("Calculate", "3/1/4/4", "50%");
    CALCULATE_BUTTON.onclick = calculateDesiredKda;
    desiredCalc.appendChild(CALCULATE_BUTTON);
    //
    const DKDA_LABEL = new Label("", "", "4/1/5/4", "dkdaLabel");
    desiredCalc.appendChild(DKDA_LABEL);
    const DKDA_VALUE_LABEL = new Label("", "", "5/1/6/4", "dkdaValueLabel");
    desiredCalc.appendChild(DKDA_VALUE_LABEL);

    function calculateDesiredKda() {
        const KILLS = KILLS_INPUT.value == null ? 0 : Number(KILLS_INPUT.value);
        const ASSISTS =
            ASSISTS_INPUT.value == null ? 0 : Number(ASSISTS_INPUT.value);
        const KA = KILLS + ASSISTS;
        const DEATHS = DEATHS_INPUT.value == null ? 0 : Number(DEATHS_INPUT.value);
        //
        const CURRENT_KDA = DEATHS > 0 ? (KA / DEATHS).toFixed(2) : null;
        if (!CURRENT_KDA) {
            DKDA_LABEL.textContent = "Desired KDA";
            DKDA_VALUE_LABEL.textContent =
                "cannot be calculated if deaths amount is 0";
        } else {
            const DESIRED_KDA = Number(DESIRED_INPUT.value);
            if (DESIRED_KDA > 0) {
                if (DESIRED_KDA > CURRENT_KDA) {
                    DKDA_LABEL.textContent = "Kills needed:";
                    DKDA_VALUE_LABEL.textContent = Math.ceil(DEATHS * DESIRED_KDA) - KA;
                } else if (DESIRED_KDA < CURRENT_KDA) {
                    DKDA_LABEL.textContent = "Deaths needed:";
                    DKDA_VALUE_LABEL.textContent = Math.ceil(KA / DESIRED_KDA) - DEATHS;
                } else {
                    DKDA_LABEL.textContent = "Current KDA";
                    DKDA_VALUE_LABEL.textContent = "is same as desired";
                }
            } else {
                DKDA_LABEL.textContent = "Desired KDA";
                DKDA_VALUE_LABEL.textContent = "must be higher than 0";
            }
        }
    }
}

buildBasicCalc();
buildDesiredCalc();
