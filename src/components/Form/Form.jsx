
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.scss'

function Form () {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        monthly_income: "",
        monthly_savings: "",
        monthly_expenses: "",
        total_debt: "",
        investments: "",
        emergency_fund: "",
        assets: "",
        })
    const [emptyError, setEmptyError] = useState("");
    const [isFormValid, setIsFormValid] = useState(true)

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
              ...prevData,
              [name]: value,
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setEmptyError("");
            
          
            if (
              !formData.monthly_income ||
              !formData.monthly_savings ||
              !formData.monthly_expenses ||
              !formData.total_debt ||
              !formData.investments ||
              !formData.emergency_fund ||
              !formData.assets 
             ) {
              setIsFormValid(false);
              setEmptyError(
                <>This field is required</>
              );
              return;
            }
                              
            setIsFormValid(true);
            navigate('/results');
            
        };

       
            

    return(
        <div className ="form-section">
       

        <h1>Calculate your <span style={{ color: "#EB0F19" }}>Financial Wellness Score</span> Today!</h1>
        <p className='heading'>Fill out the form below to get started!</p>
        
        <form className="form" onSubmit={handleSubmit}>
            <div>
            <label className="form__label">
                    Monthly income
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.monthly_income
                      ? "form__details--errors"
                      : ""
                  }`} 
                    name="monthly_income"
                    type="number"
                    placeholder="$"
                    value={formData.monthly_income}
                    onChange={handleChange}
                    />
            </label>
            {!formData.monthly_income && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Monthly savings
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.monthly_savings
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="monthly_savings"
                    type="number"
                    placeholder="$"
                    value={formData.monthly_savings}
                    onChange={handleChange}
                    />
            </label>
            {!formData.monthly_savings && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Monthly expenses
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.monthly_expenses
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="monthly_expenses"
                    type="number"
                    placeholder="$"
                    value={formData.monthly_expenses}
                    onChange={handleChange}
                    />
            </label>
            {!formData.monthly_expenses && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Total debt
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.total_debt
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="total_debt"
                    type="number"
                    placeholder="$"
                    value={formData.total_debt}
                    onChange={handleChange}
                    />
            </label>
            {!formData.total_debt && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Investments
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.investments
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="investments"
                    type="number"
                    placeholder="$"
                    value={formData.investments}
                    onChange={handleChange}
                    />
            </label>
            {!formData.investments && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Emergency fund amount
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.emergency_fund
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="emergency_fund"
                    type="number"
                    placeholder="$"
                    value={formData.emergency_fund}
                    onChange={handleChange}
                    />
            </label>
            {!formData.emergency_fund && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Any addition assets
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.assets
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="assets"
                    type="number"
                    placeholder="$"
                    value={formData.assets}
                    onChange={handleChange}
                    />
            </label>
            {!formData.assets && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <button className='form__button'>Submit</button>
        </form>
        </div>
    )
}

export default Form