import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XC0NSQx2UGqYumy0BnW5mtbMRNAX9WU5s_-eMf30bAUYRzSw-53CXDJc2oRI8DxJTf3cb_PXQunyo2okVqvxhgI0UPa02mUi_31uiz_rfeIDpITUJdOLr5M1880rYHYx'
    }
});
