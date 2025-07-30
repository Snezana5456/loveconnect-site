showNotification('Please select a payment method.', 'error');
return;
}

const button = event.target;
const originalText = button.textContent;

button.innerHTML = '<span class="spinner"></span>Processing payment...';
button.disabled = true;

// Simulate payment processing
setTimeout(() => {
    userPlan = selectedPlan;
    currentUser.plan = selectedPlan;
    maxDailyLikes = plans[selectedPlan].maxDailyLikes;

    updateSubscriptionStatus();
    closeModal('#paymentModal');
    showNotification('Payment successful!', 'success');
    button.innerHTML = originalText;
    button.disabled = false;
}, 2000);
