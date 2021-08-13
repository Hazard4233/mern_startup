import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import logging from '../../config/logging'
import IPage from '../../interfaces/page' 


const RegisterPage: React.FC<IPage & RouteComponentProps> = props => {
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
        let params = props.match.params
        if ('number' in params) {
            logging.info(`Number parameter is ${params}`)
        }else {
            logging.info(`No number parameter`)
        }
    }, [props.name, props.match.params])
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
                <div className="text-center text-4xl font-bold">Sign Up</div>
            </div>
            <div className="max-w-md w-full mx-auto mt-5 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6">
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Please type email"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Please type password"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Confirm Password</label>
                        <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Confirm password"/>
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Source</label>
                        <select name="" id="" className="w-full p-2 border border-gray-300 rounded mt-1 cursor-pointer">
                            <option value="YouTube">YouTube</option>
                            <option value="WebSite">WebSite</option>
                        </select>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-blue-400 rounded" id="login_rememeberme"/>
                            <label htmlFor="login_rememeberme" className="ml-2 text-sm text-gray-600 cursor-pointer">Remember me</label>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a href="/login" className="ml-auto font-medium text-sm text-blue-500">Already have an account?</a>
                    </div>
                    <div>
                        <button type="submit" className=" w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage