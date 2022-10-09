import { DisplayProcessor } from "../../../node_modules/jasmine-spec-reporter/built/main.js";
import { StacktraceOption } from "../../../node_modules/jasmine-spec-reporter/built/configuration.js";
import { SpecReporter } from "../../../node_modules/jasmine-spec-reporter/built/spec-reporter.js";
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
);
