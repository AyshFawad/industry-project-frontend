import axios from "axios";
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.scss'

function Form () {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        monthlyIncome: "",
        monthlySavings: "",
        monthlyExpenses: "",
        totalDebt: "",
        investments: "",
        emergencyFund: "",
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

        const createCustomerData = async () => {
          try {
              await axios.post(
              "http://localhost:8080/financial/calculate",
              formData)
              console.log(formData);
            setFormData({
              monthlyIncome: "",
              monthlySavings:"",
              monthlyExpenses: "",
              totalDebt: "",
              investments: "",
              emergencyFund: "",
              
          });
        
          } catch (error) {
            console.error("Request failed:", error.response?.data || error.message);
            setEmptyError(
              error.response?.data?.message || "Failed to create Customer data. Please try again."
            );
          }
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            setEmptyError("");
            
          
            if (
              !formData.monthlyIncome ||
              !formData.monthlySavings ||
              !formData.monthlyExpenses ||
              !formData.totalDebt ||
              !formData.investments ||
              !formData.emergencyFund 
              
             ) {
              setIsFormValid(false);
              setEmptyError(
                <>This field is required</>
              );
              return;
            }
                              
            setIsFormValid(true);
            await createCustomerData();
            
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
                    !isFormValid && !formData.monthlyIncome
                      ? "form__details--errors"
                      : ""
                  }`} 
                    name="monthlyIncome"
                    type="number"
                    placeholder="$"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    />
            </label>
            {!formData.monthlyIncome && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Monthly savings
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.monthlySavings
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="monthlySavings"
                    type="number"
                    placeholder="$"
                    value={formData.monthlySavings}
                    onChange={handleChange}
                    />
            </label>
            {!formData.monthlySavings && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Monthly expenses
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.monthlyExpenses
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="monthlyExpenses"
                    type="number"
                    placeholder="$"
                    value={formData.monthlyExpenses}
                    onChange={handleChange}
                    />
            </label>
            {!formData.monthlyExpenses && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
            <div>
            <label className="form__label">
                    Total debt
                    <input
                  className={`form__details ${
                    !isFormValid && !formData.totalDebt
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="totalDebt"
                    type="number"
                    placeholder="$"
                    value={formData.totalDebt}
                    onChange={handleChange}
                    />
            </label>
            {!formData.totalDebt && (
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
                    !isFormValid && !formData.emergencyFund
                      ? "form__details--errors"
                      : ""
                  }`}
                    name="emergencyFund"
                    type="number"
                    placeholder="$"
                    value={formData.emergencyFund}
                    onChange={handleChange}
                    />
            </label>
            {!formData.emergencyFund && (
                <p className="errors">{emptyError}</p>
              )}
            </div>
                   
            <button className='form__button'>Submit</button>
        </form>
        </div>
    )
}

export default Form