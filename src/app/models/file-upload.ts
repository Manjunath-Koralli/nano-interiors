export class FileUpload {
    key: string = '';
    name: string = '';
    customerName: string;
    customerLocation: string;
    customerRating: string;
    customerFeedback: string;
    url: string = '';
    customerFile: File;

    constructor(customerName: string,
            customerLocation:string,
            customerRating:string,
            customerFeedback:string,
            customerFile: File) {
        this.customerName = customerName;
        this.customerLocation = customerLocation;
        this.customerRating = customerRating;
        this.customerFeedback = customerFeedback;
        this.customerFile = customerFile;
    }
}
