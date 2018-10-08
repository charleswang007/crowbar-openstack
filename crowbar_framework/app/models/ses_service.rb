class SesService < PacemakerServiceObject
  def initialize(thelogger = nil)
    super(thelogger)
    @bc_name = "ses"
  end
end