class Employee
    attr_reader :salary
    def initialize
        #name, title, salary, and boss.
        @name
        @title
        @salary
        @boss
    end

    def bonus(multiplier)
        bonus = salary * multiplier
    end
end

class Manager < Employee
    def initialize
        managers = [] #Array of Employee instances
        super 
    end

    def bonus(multiplier)
        salary_of_employee * multiplier
    end

    def salary_of_employee
        sum = 0
        mangers.each do |employee|
            sum += employee.salary
        end
        sum
    end
end