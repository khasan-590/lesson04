"use strict";

let  money = +prompt("Ваш месячный доход?", 1000) ,  //“Доход за месяц”
  income = 'Курьер', // Дополнительный доход.
  addExpenses =  prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
  deposit = confirm("Есть ли у вас депозит в банке?"), //любое булево значение,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?'),
  mission = 50000, //любое число(Какую сумму хотите накопить)
  period = 6; //число от 1 до 12(месяцев)
  

  let showTypeOf = function (data){
		console.log(data, typeof(data));
	};
	
	showTypeOf(money);
	showTypeOf(income);
	showTypeOf(deposit);

  console.log(addExpenses.length , addExpenses.toLowerCase() , addExpenses.split(', ') );
  console.log(mission + ' доллар, за ' + period  + ' месяцев');


  let getExpensesMonth = function () {
    return amount1 + amount2;
  };
  console.log(getExpensesMonth());
  
  let getAccumulatedMonth = function () {
    return  money - getExpensesMonth();
  };
  

  let accumulatedMonth = getAccumulatedMonth();
  console.log(accumulatedMonth);

  const getTargetMonth = function() {
    return Math.ceil(mission / accumulatedMonth);
  };

  console.log("Цель будет достигнута через" + getTargetMonth() + 'месяцев') ;

  let budgetDay = Math.floor(accumulatedMonth / 30);
  console.log(budgetDay, "debug");



  let getStatusIncome = function () {
    if (budgetDay >= 1200) {
      return("У вас высокий уровень дохода");
    } else if (budgetDay > 600 && budgetDay < 1200) {
      return('У вас средний уровень дохода');
    } else if (budgetDay <=600 && budgetDay  > 0) {
      return('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
      return('Что то пошло не так');
    }
  };
  
  console.log(getStatusIncome());