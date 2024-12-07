'use strict';
function getShippingCost(country) {

    switch (country) {
        case 'Australia':
            return 'Shipping to Australia will cost 170 credits';
        case 'China':
            return 'Shipping to China will cost 100 credits';
        case 'Chile':
            return 'Shipping to Chile will cost 250 credits';
        case 'Jamaica':
            return 'Shipping to Jamaica will cost 120 credits';
     
        default:
            return 'Sorry, there is no delivery to your country';
    }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// Работа switch без break:
// Если в switch операторе не использовать break, выполнение кода будет продолжаться до конца блока switch,
// включая последующие case. Это поведение называется "fall-through".
// Однако в этом случае каждый case возвращает значение с помощью оператора return.
//  Когда функция выполняет return, она немедленно завершает выполнение и возвращает указанное значение,
//     что предотвращает выполнение следующего кода, даже если нет оператора break.