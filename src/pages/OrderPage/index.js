import React from 'react'
import css from './style.module.css'
import baseAxios from '../../axios-instance/base-axios'
import toast, { Toaster } from 'react-hot-toast';
import Order from '../../component/Order';

class OrderPage extends React.Component {

    state = {
        orders: [],
        loading: false
    }

    componentDidMount = () => {
        this.setState({ loading: true })
        baseAxios.get('/orders.json')
        .then(res =>{
          console.log('------res: ', Object.entries(res.data).reverse());
          this.setState({orders: Object.entries(res.data).reverse()})
        })
        .catch((err) => {
          toast.error('Error: ' + err)
        })
        .finally(() => {
          this.setState({ loading: false })
        })
    }

    render(){
        return (
            <div className={css.OrderPage}>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                {!this.state.loading && (this.state.orders.map((order) => (
                    <div key={order[0]}><Order data={order[1]} /></div>
                )))}
            </div>
        )
    }
}

export default OrderPage;