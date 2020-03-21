<?php
class Form_LoginForm extends Zend_Form{
	public function __construct($option =null){
		parent::__construct($option);
		$this->setName('register');
		$username= new Zend_Form_Element_Text('email');
		$username->setLabel('Е-мэйл хаяг')
				->setRequired(true)
				->removeDecorator('DtDdWrapper')
                ->addDecorator(
        		array('openDiv' =>'HtmlTag'),
        		array('tag' => 'li', 'openOnly' => true))
                 ->addDecorator(
                array('closeDiv' =>'HtmlTag'),
                array('tag' => 'li', 'closeOnly' => true))
                ->addDecorator('HtmlTag', array('tag' => 'div', 'class' => 'input-box'))
		        ->setAttrib('class', 'input-text required-entry validate-email')
		        ->getDecorator('Label')->setTag(null);
		
		
		$password= new Zend_Form_Element_Password('password');
		$password->setLabel('Нууц үг')
				->setRequired(true)
				->removeDecorator('DtDdWrapper')
                ->addDecorator(
        		array('openDiv' =>'HtmlTag'),
        		array('tag' => 'li', 'openOnly' => true))
                 ->addDecorator(
                array('closeDiv' =>'HtmlTag'),
                array('tag' => 'li', 'closeOnly' => true))
                ->addDecorator('HtmlTag', array('tag' => 'div', 'class' => 'input-box'))
		        ->setAttrib('class', 'input-text required-entry validate-password')
		        ->getDecorator('Label')->setTag(null);
		
		$login=new Zend_Form_Element_Submit('send');
		$login->setAttrib('class', 'nevtreh')
		      ->setAttrib('name', 'send')
		      ->setAttrib('id', 'send2')
		      ->setAttrib('title', 'Нэвтрэх')
		      ->setLabel('Нэвтрэх')
		      ->addDecorator(
        		array('openDiv' =>'HtmlTag'),
        		array('tag' => 'div', 'openOnly' => true))
                 ->addDecorator(
                array('closeDiv' =>'HtmlTag'),
                array('tag' => 'div', 'closeOnly' => true));
        
		//$this->clearDecorators();
        $this->addDecorator('FormElements')
         ->addDecorator('HtmlTag', 
                           array('tag' => '<ul>','class'=>'form-list'))
         ->addDecorator('Form');
        
        $this->setElementDecorators(array(
            array('ViewHelper'),
            array('Errors'),
            array('Description'),
            array('Label', array('separator'=>' ')),
            array('HtmlTag', 
            array('tag' => 'li')),
        ));
        
        $login->setDecorators(array(
            array('ViewHelper'),
            array('Description'),
            array(array('openDiv' =>'HtmlTag'), 
            array('tag' => 'div', 'class'=>'buttons-set','openOnly' => true)),
        ));
        
        
        
		$captca=new Zend_Form_Element_Captcha('captcha', array(
    'label' => "Please verify you're a human",
		'description' => '<div id="refreshcaptcha">Refresh</div>',
		'required'=>true,
        'captcha' => array(
            'captcha' => 'Image',
            'font' => APPLICATION_PATH . '/../public/css/LeagueGothic/League_Gothic-webfont.ttf',
            'fontSize' => '24',
            'wordLen' => 6,
            'height' => '50',
            'width' => '150',
            'imgDir' => APPLICATION_PATH . '/../public/img/captcha/',
            'imgUrl' => Zend_Controller_Front::getInstance()->getBaseUrl().'/img/captcha/',
		'gcFreq'=>50,
        'expiration' => 300
        )
    ));
    $captca->getDecorator('Description')->setOptions(array(
            'escape'        => false,
            'style'         => 'cursor: pointer; color: #ED1C24',
            'tag'           => 'div'
        ));

        $this->setAttrib('id', 'login-form');
		$this->addElements(array($username,$password,$login));
		$this->setMethod(post);
		$this->setAction(Zend_Controller_Front::getInstance()->getBaseUrl().'/autentication/login');
	}
}