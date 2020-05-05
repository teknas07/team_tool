//Sign In and Sign Up
jQuery(document).ready(function($){
  var $form_modal = $('.user-modal'),
    $form_login = $form_modal.find('#login'),
    $form_signup = $form_modal.find('#signup'),
    $form_forgot_password = $form_modal.find('#reset-password'),
    $form_modal_tab = $('.switcher'),
    $tab_login = $form_modal_tab.children('li').eq(0).children('a'),
    $tab_signup = $form_modal_tab.children('li').eq(1).children('a'),
    $forgot_password_link = $form_login.find('.form-bottom-message a'),
    $back_to_login_link = $form_forgot_password.find('.form-bottom-message a'),
    $main_nav = $('#menu');

  //open modal
  $main_nav.on('click', function(event){

    if( $(event.target).is($main_nav) ) {
      // on mobile open the submenu
      $(this).children('ul').toggleClass('is-visible');
    } else {
      // on mobile close submenu
      $main_nav.children('ul').removeClass('is-visible');
      //show modal layer
      $form_modal.addClass('is-visible'); 
      //show the selected form
      ( $(event.target).is('.signup') ) ? signup_selected() : login_selected();
    }

  });

  //close modal
  $('.user-modal').on('click', function(event){
    if( $(event.target).is($form_modal) || $(event.target).is('.close-form') ) {
      $form_modal.removeClass('is-visible');
    } 
  });
  //close modal when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $form_modal.removeClass('is-visible');
      }
    });

  //switch from a tab to another
  $form_modal_tab.on('click', function(event) {
    event.preventDefault();
    ( $(event.target).is( $tab_login ) ) ? login_selected() : signup_selected();
  });

  //hide or show password
  $('.hide-password').on('click', function(){
    var $this= $(this),
      $password_field = $this.prev('input');
    
    ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
    ( 'Show' == $this.text() ) ? $this.text('Hide') : $this.text('Show');
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

  //show forgot-password form 
  $forgot_password_link.on('click', function(event){
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on('click', function(event){
    event.preventDefault();
    login_selected();
  });

  function login_selected(){
    $form_login.addClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.addClass('selected');
    $tab_signup.removeClass('selected');
  }

  function signup_selected(){
    $form_login.removeClass('is-selected');
    $form_signup.addClass('is-selected');
    $form_forgot_password.removeClass('is-selected');
    $tab_login.removeClass('selected');
    $tab_signup.addClass('selected');
  }

  function forgot_password_selected(){
    $form_login.removeClass('is-selected');
    $form_signup.removeClass('is-selected');
    $form_forgot_password.addClass('is-selected');
  }

  // //REMOVE THIS - it's just to show error messages 
  // $form_login.find('input[type="submit"]').on('click', function(event){
  //   event.preventDefault();
  //   $form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
  // });
  // $form_signup.find('input[type="submit"]').on('click', function(event){
  //   event.preventDefault();
  //   $form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
  // });

  if(!Modernizr.input.placeholder){
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        }
    }).blur(function() {
      var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.val(input.attr('placeholder'));
        }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
        })
    });
  }

});



jQuery.fn.putCursorAtEnd = function() {
  return this.each(function() {
      // If this function exists...
      if (this.setSelectionRange) {
          // ... then use it (Doesn't work in IE)
          var len = $(this).val().length * 2;
          this.setSelectionRange(len, len);
      } else {
        // ... otherwise replace the contents with itself
        // (Doesn't work in Google Chrome)
          $(this).val($(this).val());
      }
  });
};

// Task Planner

const button = document.querySelector(".wrapper button");
const input = document.querySelector(".wrapper input");
const list = document.querySelectorAll(".wrapper ul");
const longInput = document.getElementsByClassName("wrapper input");



const selectInput = () => {
  console.log("clicked");
  input.style.width = "80%";
};

input.onclick = selectInput;

const markDone = event => {
  
  const li = event.target;
  li.style.textDecoration = "line-through";
  li.style.fontWeight = "normal";
  li.style.backgroundColor = "rgb(242, 239, 241)";

  list[1].appendChild(li);
};

const removeTask = event => {
  const li = event.target;
  list[1].removeChild(li);
};

list[1].onclick = removeTask;

const addTask = () => {
  console.log("clicked");
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;

    li.onclick = markDone;
    // console.warn(li);
    list[0].appendChild(li);
    input.value = "";
  }
};

button.onclick = addTask;

input.addEventListener("keyup", function(enter) {
  if (enter.keyCode === 13) {
    addTask();
  }
});


//Users
/// dribbble
// let dribbbleLink = 'https://dribbble.com/ryanparag';

// const dribbble = () => {
//   let styleRules = '<style> #dribbble { position: fixed; bottom: 15px; right: 15px;width: 100px;z-index: 100; } #dribbble a, #dribbble svg { display: block; } #dribbble svg{ width: 100%;fill: rgba(0, 0, 0, 0.25);} #dribbble svg:hover circle, #dribbble svg:focus circle{ fill: #ea4c89; } #dribbble svg:hover path, #dribbble svg:focus path{ fill: #C32361; }</style>';
//   let styleContainer = document.createElement('div');
//   styleContainer.innerHTML = styleRules;
//   document.head.appendChild(styleContainer);
//   let logoHTML = `
// 		<a href=` + dribbbleLink + ` target="_blank">
// 			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
// 				<rect width="32" height="32" fill="black" fill-opacity="0"/>
// 				<circle cx="16" cy="16" r="15.5"/>
// 				<rect width="32" height="32" fill="black" fill-opacity="0"/>
// 				<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"/>
// 			</svg>
// 		</a>`;

//   let logo = document.createElement('div');
//   logo.id = 'dribbble';
//   logo.innerHTML = logoHTML;

//   document.body.appendChild(logo);
// };
// dribbble();console.clear();

document.getElementById('sup').addEventListener('click', () => {
  document.documentElement.classList.toggle('theme--dark');
  document.getElementById('sup').classList.toggle('c-toggle--active');
});

const contactItems = document.querySelectorAll('.c-contact');

const updateCount = () => {
  const contactItems = document.querySelectorAll('.c-contact');
  let count = contactItems.length;
  if (count > 1) {
    document.getElementById('teamCount').innerHTML = `(${count} team members)`;
  } else if (count == 1) {
    document.getElementById('teamCount').innerHTML = `(${count} team member)`;
  } else {
    document.getElementById('teamCount').innerHTML = `(No team members)`;
  }
};

updateCount();

contactItems.forEach(contact => {
  // assign bg to avatars
  const avatar = contact.querySelector('.c-contact__avatar');
  if (avatar) {
    const avatarUrl = avatar.getAttribute('data-avatar');
    avatar.style.backgroundImage = `url('${avatarUrl}')`;
  }

  // click events for buttons
  const viewBtn = contact.querySelector('.c-button--view');
  const deleteBtn = contact.querySelector('.c-button--delete');
  if (viewBtn && deleteBtn) {

    deleteBtn.addEventListener('click', deleteItem);

    viewBtn.addEventListener('click', () => {
      console.log('asdf');
    });

  }

});

const emptyState = x => {
  const newEmptyState = document.createElement('div');
  newEmptyState.classList = 'c-empty-state u-text--center';
  newEmptyState.innerHTML = `
		<img class="c-empty-state__hero" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/emptyState.svg" />
		<h3 class="u-text--regular">No team members</h3>
		<p>There are currently no members on this team. Any new user you add to the team will appear here.</p><br/>
	`;
  x.appendChild(newEmptyState);
};

function deleteItem() {
  const transitionTime = 250;
  const contact = this.parentNode.parentNode;
  contact.style.transition = `all ${transitionTime}ms ease-out 0s`;
  contact.style.transform = 'translateX(4rem)';
  contact.style.opacity = 0;
  setTimeout(() => {
    if (contact.parentNode.querySelectorAll('.c-contact').length < 2) {
      emptyState(contact.parentNode);
    } else {
      if (contact.parentNode.querySelector('.c-empty-state')) {
        document.querySelector('.c-empty-state').remove();
      }
    }
    contact.remove();
    updateCount();
  }, transitionTime);
}

const states = ['info', 'primary', 'danger', 'success', 'warning'];

const createAlert = (target, state, content) => {
  const newAlert = document.createElement('div');
  newAlert.classList = `c-alert c-alert--${state}`;
  newAlert.innerHTML = content;
  target.prepend(newAlert);
};

const closeMobileForm = () => {
  document.querySelector('.u-hide--mobile').classList.add('is-closing');
  setTimeout(() => {
    document.querySelector('.u-hide--mobile').classList.remove('is-open');
    document.querySelector('.u-hide--mobile').classList.remove('is-closing');
  }, 240);
};

const sendForm = () => {
  const nameInput = document.getElementById('newInviteName');
  const positionInput = document.getElementById('newInvitePosition');
  const randomState = Math.floor(Math.random() * 4);

  if (!nameInput.value.length == 0 && !positionInput.value.length == 0) {
    const list = document.querySelector('.c-list');
    const newItem = document.createElement('li');
    newItem.classList = 'c-contact';
    newItem.innerHTML = `
			<div class="c-contact__left">
				<div class="c-contact__avatar" style="background-color: var(--${states[randomState]})">${nameInput.value.charAt(0)}</div>
				<div class="c-contact__content">
					<div class="c-contact__name">${nameInput.value}</div>
					<small class="c-contact__description">${positionInput.value}</small>
				</div>
			</div>
			<div class="l-actions c-contact__right">
				<div class="c-button c-button--danger c-button--sm c-button--delete">Delete</div>
				<div class="c-button c-button--default c-button--sm c-button--view">View</div>
			</div>
		`;
    if (list.querySelector('.c-empty-state')) {
      list.querySelector('.c-empty-state').remove();
    }
    if (document.getElementById('addForm').querySelector('.c-alert')) {
      document.getElementById('addForm').querySelector('.c-alert').remove();
    }
    createAlert(document.getElementById('addForm'), 'success', `${nameInput.value} added to team!`);
    newItem.querySelector('.c-button--delete').
    addEventListener('click', deleteItem);
    list.prepend(newItem);
    nameInput.value = '';
    positionInput.value = '';
    updateCount();
    if (document.querySelector('.u-hide--mobile.is-open') && document.querySelector('.c-overlay')) {
      closeMobileForm();
      document.querySelector('.c-overlay').remove();
    }
  } else {
    if (document.getElementById('addForm').querySelector('.c-alert')) {
      document.getElementById('addForm').querySelector('.c-alert').remove();
    }
    createAlert(document.getElementById('addForm'), 'danger', `Oops! It seems the form is incomplete.`);
  }
};

const newMemberBtn = document.getElementById('addMember');

newMemberBtn.addEventListener('click', sendForm);

const mobileAddBtn = document.getElementById('mobileAddBtn');

const createOverlay = () => {
  const newOverlay = document.createElement('div');
  newOverlay.classList = 'c-overlay';
  newOverlay.addEventListener('click', () => {
    newOverlay.remove();
    if (document.querySelector('.u-hide--mobile')) {
      closeMobileForm();
    }
  });
  document.body.appendChild(newOverlay);
};

document.getElementById('closeMobileAdd').addEventListener('click', () => {
  if (document.querySelector('.u-hide--mobile.is-open') && document.querySelector('.c-overlay')) {
    closeMobileForm();
    document.querySelector('.c-overlay').remove();
  }
});

const openMobileAdd = () => {
  const mobileHide = document.querySelector('.u-hide--mobile');
  mobileHide.classList.add('is-open');
  createOverlay();
};

mobileAddBtn.addEventListener('click', openMobileAdd);
