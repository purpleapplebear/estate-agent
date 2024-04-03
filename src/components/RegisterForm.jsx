import './components.css'
import { useEffect, createRef, useState } from 'react' 
import { postAccount } from '../api/api';
import { fetchSellers } from '../api/api';
import { fetchBuyers } from '../api/api';
import { PostcodeLookup } from "@ideal-postcodes/postcode-lookup";
import PostcodeLookupComponent from './PostcodeLookupComponent';

// A complete function that has inputs (through HTML) - using state to save the info inputted. 

// On click of button all of the data inputted gets send straight to JSON server (if you are connected to the server)

// Does not currently check if account is already registered (!!)

// On call needs user='buyer' or user='seller'



function RegisterForm(user) {

    const [address, setAddress] = useState({
        line_1: "",
        line_2: "",
        line_3: "",
        post_town: "",
        postcode: ""
      });

    let [account, setAccount] = useState({firstName : '', surname : '', address : '', postcode : '', phone : ''})
    let dataNames = []

    if (user.user === "seller") {

        useEffect(() =>{
            fetchSellers().then((data)=>{
                for (let id in data) {
                    dataNames.push(data[id].firstName.toLowerCase().trim() + data[id].surname.toLowerCase().trim())
                }
            })
        })
}

    if (user.user === "buyer") {

        useEffect(() =>{
            fetchBuyers().then((data)=>{
                for (let id in data) {
                    dataNames.push(data[id].firstName.toLowerCase().trim() + data[id].surname.toLowerCase().trim())
                }
            })
        })
    }




    return (
        <div className="form-container">
            
            <form>
            First Name: <div><input name="firstname" value={account.firstName} 
            onChange={(e) =>
                setAccount((account) => ({ ...account, firstName: e.target.value }))} required></input></div>

            Surname: <div><input name="surname" value={account.surname}
            onChange={(e) =>
                setAccount((account) => ({ ...account, surname: e.target.value }))} required></input></div><br /><br />

            <PostcodeLookupComponent onAddressSelected={(address) => setAddress(address)} />

            Address Line 1: <div><input name="address" value={address.line_1}
            onChange={(e) =>
                setAddress({ ...address, line_1: e.target.value })} required></input></div>

            Address Line 2: <div><input name="address" value={address.line_2}
            onChange={(e) =>
                setAddress({ ...address, line_2: e.target.value })}></input></div>

            Address Line 3: <div><input name="address" value={address.line_3}
            onChange={(e) =>
                setAddress({ ...address, line_3: e.target.value })}></input></div>

            Town: <div><input name="address" value={address.post_town}
            onChange={(e) =>
                setAddress({ ...address, post_town: e.target.value })}></input></div>

            Postcode: <div><input name="postcode" value={address.postcode}
                onChange={(e) =>
                    setAddress({ ...address, postcode: e.target.value })} required></input></div>

            Telephone: <div><input name="telephone" value={account.phone}
                onChange={(e) =>
                    setAccount((account) => ({ ...account, phone: e.target.value }))} required></input></div>


            <button className="form-button" onClick={(e)=> {
                // prevents button from refreshing page
                e.preventDefault()

                let string_address = address.line_1 + ", " + address.line_2 + ", " + address.line_3 + ", " + address.post_town 

                account.address = string_address
                account.postcode = address.postcode

                // if statement to check values are put in the form before submitting to database
                if (account.firstName && account.surname && account.phone) {   

                    let checker = account.firstName.toLowerCase().trim() + account.surname.toLowerCase().trim()
                    
                    if (!dataNames.includes(checker)) {
                        //calls the api and adds the account information to the database
                        postAccount(account, user.user)
                        //sets the data back to empty to clear form
                        setAccount({firstName : '', surname : '', address : '', postcode : '', phone : ''})
                }

                else (
                    alert('Name already registered')
                )
            }

                else (
                    alert('Please fill in all required fields')
                )
            }}>Submit</button>
            </form>
        </div>
    )

}

export default RegisterForm