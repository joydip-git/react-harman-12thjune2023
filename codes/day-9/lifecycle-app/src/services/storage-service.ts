import { BehaviorSubject } from "rxjs";

export class StrorageService {
    private store = new BehaviorSubject<number>(0)
    public storeObservable = this.store.asObservable()

    private static serviceInstance: StrorageService;
    private constructor() { }
    public static create() {
        if (!this.serviceInstance) {
            this.serviceInstance = new StrorageService()
        }
        return this.serviceInstance
    }
    public publish(value: number) {
        this.store.next(value)
    }
}
//export const storage = new StrorageService()