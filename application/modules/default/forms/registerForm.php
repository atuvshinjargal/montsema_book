<?php
class Form_RegisterForm extends Zend_Form{
	public function __construct($option =null){
		parent::__construct($option);
		$this->setName('register');
		$this->setAttrib('class', 'form-horizontal');
		
		$firstname = new Zend_Form_Element_Text('firstname');
		$firstname->setLabel('Овог')
		          ->setAttribs(array('class'=>'input-text required-entry',
		                              'maxlength'=>'255',
		                              'title'=>'Овог'
		          ))
		->setRequired(true);
		
		$lastname = new Zend_Form_Element_Text('lastname');
		$lastname->setLabel('Нэр')
		          ->setAttribs(array('class'=>'input-text required-entry',
				                        'maxlength'=>'255',
				                        'title'=>'Нэр'
		                                  ))
		->setRequired(true);
		
		$email = new Zend_Form_Element_Text('email');
		$email->setLabel('Е-мэйл хаяг')
		      ->setAttribs(array('class'=>'input-text validate-email required-entry',
		        'id'=>'email_address',
				'title'=>'Е-мэйл хаяг'
		        ))
		->addFilters(array('StringTrim', 'StripTags'))
		->addValidator('EmailAddress',  TRUE  )	
		->setRequired(true);
			
		$password= new Zend_Form_Element_Password('password');
		$password->setLabel('Нууц үг')
            		->setAttribs(array('class'=>'input-text required-entry validate-password',
            				'title'=>'Нууц үг'
            		))
				->setRequired(true);
		$password->addFilter(new Zend_Filter_StringTrim())
    			->addValidator(new Zend_Validate_NotEmpty());
				
		$confirmpassword= new Zend_Form_Element_Password('confirmPassword');
		$confirmpassword->setLabel('Нууц үгээ давтана уу')
                		->setAttribs(array('class'=>'input-text required-entry validate-cpassword',
                				'title'=>'Нууц үгээ давтана уу'
                		))
				->setRequired(true);
		$confirmpassword->addValidator('StringLength', false, array(6,24))
            ->addFilter(new Zend_Filter_StringTrim())
    		->addValidator(new Zend_Validate_Identical($_POST['password']));		
					
				
		$captca=new Zend_Form_Element_Captcha('captcha', array(
    'label' => "",
		'description' => 'Дээр харуулсан кодыг оруулна уу',
        'captcha' => array(
            'captcha' => 'Image',
            'font' => APPLICATION_PATH . '/../public/css/LeagueGothic/League_Gothic-webfont.ttf',
            'fontSize' => '24',
            'wordLen' => 6,
            'height' => '50',
            'width' => '200',
            'imgDir' => APPLICATION_PATH . '/../public/img/captcha/',
            'imgUrl' => Zend_Controller_Front::getInstance()->getBaseUrl().'/img/captcha/',
        )
    ));
    $captca->getDecorator('Description')->setOptions(array(
            'tag'=>'label',
            'class'=>'captcha-input'
        ));
    $captca->setAttribs(array('class'=>'input-text required-entry captchaclear',
                				'title'=>'Дээр харуулсан кодыг оруулна уу',
                                'id'=>'captcha_user_create'
                		));

        $captca->removeDecorator('DtDdWrapper')
                ->removeDecorator('HtmlTag');
		$singup=new Zend_Form_Element_Submit('singup');
		$singup->setAttrib('class', 'btn');
		$singup->setLabel('Create my account')
				->setIgnore(true);;
		
		$this->addElements(array($email,$password,$confirmpassword,$firstname,$lastname,$captca,$singup));
		$this->setMethod(post);
		$this->setAction(Zend_Controller_Front::getInstance()->getBaseUrl().'/autentication/signup');
	}
}