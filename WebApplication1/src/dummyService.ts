import { transient } from "aurelia-framework";

@transient()
export class DummyService {
    steps: Array<any>;

    constructor() {
        this.steps = [{ name: "step 1" }, { name: "step 2" }];
    }
}