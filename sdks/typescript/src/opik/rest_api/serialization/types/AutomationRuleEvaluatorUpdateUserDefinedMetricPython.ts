/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { UserDefinedMetricPythonCode } from "./UserDefinedMetricPythonCode";

export const AutomationRuleEvaluatorUpdateUserDefinedMetricPython: core.serialization.ObjectSchema<
    serializers.AutomationRuleEvaluatorUpdateUserDefinedMetricPython.Raw,
    OpikApi.AutomationRuleEvaluatorUpdateUserDefinedMetricPython
> = core.serialization.object({
    code: UserDefinedMetricPythonCode.optional(),
});

export declare namespace AutomationRuleEvaluatorUpdateUserDefinedMetricPython {
    export interface Raw {
        code?: UserDefinedMetricPythonCode.Raw | null;
    }
}
