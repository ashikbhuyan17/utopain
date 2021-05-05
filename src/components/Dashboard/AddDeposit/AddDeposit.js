import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../shared/Navbar/Navbar';
import Sidebar from '../../shared/Sidebar/Sidebar';
import DepositHistory from '../DepositHistory/DepositHistory';

const AddDeposit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <section>
            <Navbar />
            <div className="row">
                <Sidebar />
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                    <div className="card ">
                        <div className="card-body">
                            <form className="row gutters" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-3">
                                    <h2 className="mb-2 text-primary">Deposit</h2>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                                    <div className="form-group">
                                        <label htmlFor="transId" className="form-label">Transaction ID</label>
                                        <input type="text" {...register("transId", { required: true })} name="transId" placeholder="Transaction ID" className="form-control" />
                                        {errors.transId && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div>

                                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                </div> */}
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="payment" className="form-label">Payment Method</label>
                                        <select {...register("payment", { required: true })} className="form-select" name="payment">
                                            {/* <option disabled>Open this select menu</option> */}
                                            <option value="Bkash">Bkash</option>
                                            <option value="DBBL NEXUS Cards">DBBL NEXUS Cards</option>
                                            <option value="Mastercard">Mastercard</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="row gutters">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
                                        <div className="text">
                                            <button type="submit" id="submit" name="submit"
                                                className="btn btn-primary">Add Deposit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>


                            <DepositHistory />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDeposit;