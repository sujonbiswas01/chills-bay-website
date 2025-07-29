import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { CiUser } from "react-icons/ci";
import { Input } from "@heroui/react";
import { useState } from "react";


function MyModal() {
    const [isOpen, setisOpen] = useState(false)
    const handleopen = () => {
        setisOpen(true)

    }
    const handleClose = () => {
        setisOpen(false)

    }

    const handleChange = ()=>{
        setisOpen(false)
    }
    return (
        <section>
            <div className="flex flex-wrap gap-3 ">
                <Button variant="flat" onPress={handleopen}> <CiUser /> Account</Button>
            </div>

            <Modal isOpen={isOpen} backdrop="blur" onClose={handleClose} size="5xl" placement="top">
                <ModalContent>
                    <ModalBody className="px-0 py-0">
                        <div className="flex flex-col md:flex-row w-full h-full md:max-h-[100vh] overflow-y-auto md:overflow-visible">
                            {/* left */}
                            <div className="bg-[url(/LoginImg.png)] bg-cover bg-no-repeat bg-center flex flex-col text-white w-full md:w-1/3 px-8 py-16">
                                <h3 className="text-4xl font-bold text-start mt-10">Sign Up</h3>
                                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tellus ullamcorper hendrerit quis purus pellentesque. Ac sagittis, convallis non tincidunt interdum eu nullam aliquam maecenas. Enim sed tortor morbi ut suspendisse. </p>
                            </div>
                            {/* right  */}
                            <div className="w-full md:w-2/3 p-8 bg-white">
                            <div>
                                <img src="/logo.png" className="w-fit mx-auto" alt="" />
                                <h2 className="text-2xl font-bold text-[#26395C] mb-4">Sign up and get exploring!</h2>
                                <p>Already have an account? <a className="text-blue-600 cursor-pointer" onClick={handleChange}>Sign In</a></p>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <button className="flex gap-3.5 items-center justify-center px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-150 w-full" >
                                    <img src="/google.png" className="w-5 h-5" alt="" />
                                    sign up with google</button>
                                <button className="flex gap-3 items-center justify-center px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-150 w-full" >
                                    <img src="/facebook.png" className="w-5 h-5" alt="" />
                                    sign up with facebook</button>
                                <button className="flex gap-3 items-center justify-center px-4 py-2 border rounded-md cursor-pointer hover:bg-gray-100 transition-all duration-150 w-full" >
                                    <img src="/apple.png" className="w-5 h-5" alt="" />sign up with apple</button>
                            </div>
                            {/* divider */}
                            <div className="flex items-center my-6 text-center text-gray-500 ">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="px-3 text-gray-500">or continue with</span>
                                <div className="flex-grow border-t border-gray-300"></div>

                            </div>

                            {/* manual form */}
                            <form action="" className="mt-10">
                                <div className="mb-4">
                                    <Input type="email" label="Email" placeholder="sujonbiswasdev@gmail.com" labelPlacement="outside"/>
                                </div>
                                <div className="mb-4 mt-12">
                                    <Input type="password" label="password" placeholder="*****************" labelPlacement="outside"/>
                                </div>

                                <button className="w-full bg-blue-500 text-white py-3 rounded-xl ">Sign Up</button>
                                <p className="mt-4 text-center">By creating an account, you agree to our <a href="" className="text-[#0E8BFF]">Terms & Conditions</a> and <a href="" className="text-[#0E8BFF]">Privacy Policy</a>.</p>
                            </form>

                            </div>

                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </section>
    );
}

export default MyModal