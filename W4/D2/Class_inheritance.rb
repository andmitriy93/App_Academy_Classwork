class Employee
    attr_reader :salary, :boss

    def initialize(name, title, salary, boss)
        #name, title, salary, and boss.
        @name = name
        @title = title
        @salary = salary
        @boss = boss
        @boss.managers << self
    end

    def bonus(multiplier)
        bonus = salary * multiplier
    end
end

class Manager < Employee
    attr_accessor :managers
    def initialize(name, title, salary, boss)
        @managers = [] #Array of Employee instances
        super 
    end

    def bonus(multiplier)
        salary_of_employee * multiplier
    end

    def salary_of_employee
        sum = 0
        @mangers.each do |employee|
            sum += employee.salary
        end
        sum
    end
end

p Ned = Manager.new("Ned", "Founder", 1000000, nil)
p Darren = Manager.new("Darren", "Manager", 78000, Ned)

p Ned.bonus(5)
p Darren.bonus(5)